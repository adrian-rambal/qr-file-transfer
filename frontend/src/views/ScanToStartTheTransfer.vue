<template>
    <div class="box">
        Scan this QR to start the transfer
        <div class="container is-centered">
            <figure class="image is-128x128">
                <img height="128" weight="128" src="@/assets/qr-logo.svg"/>
            </figure>
        </div>
    </div>
    <button class="button" @click="connectToServer">Connect to server</button>
    <!-- send message should remain unnactive as long as there is no peer connection stablished -->
    
    <input class="input" type="text" v-model="message" placeholder="Your message here..."/>
    <button class="button" @click="sendHola">send Message</button>
</template>

<script setup allowImportingTsExtensions lang="ts">
    import {connectToServer, sendToPeer} from "../websocket/client";
    import { ref } from 'vue'

    const message=ref('');

    function sendHola() {
        sendToPeer(message.value)
    }
</script>

