<template>
  <div>

    <p>
    <Button/>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
