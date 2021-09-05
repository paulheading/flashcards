<template>
  <div>
    <div>Game over!</div>
    <div>{{ $store.state.score }}</div>
    <button @click="resetGame" type="submit">reset</button>
  </div>  
</template>

<script>
import mixins from '../mixins'
export default {
  mixins: [mixins]
}
</script>