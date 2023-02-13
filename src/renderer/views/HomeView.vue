<template>
  <div>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>

    <p>
      Random number from main process (Using IPC & Context Bridge): <b>{{ number }}</b>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const number = ref(null)

setInterval(async () => {
  const randResult = await window.api.random()
  number.value = randResult.toFixed(3)
}, 1000)
</script>
