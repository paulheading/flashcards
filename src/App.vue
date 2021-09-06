<template>
  <div id="app">
    <game-over v-if="finished" />
    <template v-else>
      <div>{{ score }}</div>
      <div v-if="accuracy.percent">{{ accuracy.percent }}%</div>
      <div>{{ currentWord }}</div>
      <form v-on:submit.prevent>
        <input ref="guess" class="guess" type="text">
        <div v-if="answer.set">
          <div v-if="answer.correct">correct :)</div>
          <div v-else>incorrect :(</div>
        </div>
        <div v-if="answer.alternatives.length">
          <div v-if="answer.correct">alternatives:</div>          
          <div v-for="(alternative, index) in answer.alternatives" :key="`alt-${index}`">
            {{ alternative }}
          </div>
        </div>
        <button @click="!fedback ? showFeedback() : nextStep()" type="submit">enter</button>
      </form>
    </template>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import mixins from './mixins'
import { mapState } from 'vuex'
import GameOver from './components/GameOver'
export default {
  mixins: [mixins],
  computed: {
    ...mapState(['finished', 'score', 'accuracy', 'answer', 'current', 'fedback']),
    currentWord() {
      const { language, word } = this.current;
      switch (language) {
        case 'eng':
          return word.english[0];       
        default:
          return word.spanish[0];
      }
    }
  },
  methods: {
    // resetBonus() {
    //   console.log("working?");
    //   this.$store.commit('bonus', this.bonus);
    //   const loop = setInterval(function() {
    //     if (this.$store.state.bonus > 0) {
    //       this.$store.commit('bonus', this.$store.state.bonus - 1);      
    //       console.log("bonus: ", this.$store.state.bonus);
    //     }
    //   }, 1000);
    //   loop();
    //   setTimeout(clearInterval(loop), (this.bonus - 1) * 1000);
    // }
  },
  created() {
    this.selectWord();
    // this.resetBonus();
  },
  components: {
    GameOver
  }
}
</script>

<style>
#app {
  place-content: center;
  text-align: center;
  font-size: 2rem;
  display: grid;
  height: 100vh;
  gap: 1rem;
}
form {
  display: grid;
  gap: 1rem;
}
input {
  border: 1px solid black;
  border-radius: 0;
}
button {
  border: 1px solid black;
}
button:active {
  transform: scale(0.98);
}
</style>
