
// TODO: handle disconnections
// TODO: authorization based on qr, words... with an expiration time
// TODO: handle "all" kinds of negotiations

// Reference guide: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation

var conn : WebSocket | null = null;

export function connectToServer() {
    conn = new WebSocket('ws://localhost:8080/socket');

    conn.onopen = function() {
        console.log("Connected to the signaling server");
        createPeerConnection();
    };

    conn.onmessage = function(evt) {
        console.log("Got message", evt.data);
        var msg = JSON.parse(evt.data);
        switch (msg.type) {
  
        case "offer":
            handleOffer(msg);
            break;

        case "answer":
            handleAnswer(msg);
            break;
  
        case "candidate":
            handleCandidate(msg);
            break;
        default:
            break;
        }
    };
}

function sendToServer(message : any) {
    if (conn) conn.send(JSON.stringify(message));
    else {
        console.error("Connection with the server not started!");
        
    }
}

var peerConnection : RTCPeerConnection;
var dataChannel : RTCDataChannel;

function createPeerConnection() {
    var configuration = null;

    peerConnection = new RTCPeerConnection();

    // Setup ice handling
    peerConnection.onicecandidate = handleICECandidateEvent
    peerConnection.onnegotiationneeded = handleNegotiationNeededEvent;

    dataChannel = peerConnection.createDataChannel("chat", {negotiated:true, id:0});
    
    dataChannel.onopen= function(event) {
      console.log("on open ", event);
    }
    dataChannel.onmessage = function(event) {
        console.log("message:", event.data);
    };  
    dataChannel.onerror = function(error) {
        console.log("Error occured on datachannel:", error);
    };
}


function handleICECandidateEvent(event : any) {
    if (event.candidate) {
      sendToServer({
        type: "candidate",
        candidate: event.candidate,
      });
    }
  }

function handleCandidate(msg : any) {
  const candidate = new RTCIceCandidate(msg.candidate);
  peerConnection.addIceCandidate(candidate).catch(reportError);
}
  
  
function handleNegotiationNeededEvent() {
    peerConnection
    .createOffer()
    .then((offer) => peerConnection.setLocalDescription(offer))
    .then(() => {
      sendToServer({
        type: "offer",
        sdp: peerConnection.localDescription,
      });
    })
    .catch(reportError);
  }

function handleOffer(msg : any) {
    if (!peerConnection) createPeerConnection();

    var remoteDescription = new RTCSessionDescription(msg.sdp);
    peerConnection.setRemoteDescription(remoteDescription)
    .then(() => peerConnection.createAnswer())
    .then((answer) => peerConnection.setLocalDescription(answer))
    .then(() => {
        sendToServer({
            type: "answer",
            sdp: peerConnection.localDescription
          });
    })
    .catch(reportError);
};

function handleAnswer(msg : any) {
    console.log(msg);
    const desc = new RTCSessionDescription(msg.sdp);
    peerConnection.setRemoteDescription(desc).catch(reportError);
}
  
export function sendToPeer(msg:string) {
    console.log(dataChannel);
    dataChannel.send(msg);
}
