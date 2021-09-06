import Vue from 'vue'
import Vuex from 'vuex'
import words from './words'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words,
    score: 0,
    question: 0,
    increment: 10,
    fedback: false,
    finished: false,
    answer: {
      set: false,
      correct: false,
      alternatives: [],
    },
    accuracy: {
      percent: 0,
      count: 0,
    },
    current: {
      language: null,
      index: null,
      word: null,
    },
    previous: {
      index: []
    },
  },
  mutations: {
    currentWord(state, payload) {
      state.current.word = payload
    },
    currentIndex(state, payload) {
      state.current.index = payload
    },
    currentLanguage(state, payload) {
      state.current.language = payload
    },
    question(state, payload) {
      state.question = payload
    },
    accuracyCount(state, payload) {
      state.accuracy.count = payload
    },
    accuracyPercent(state, payload) {
      state.accuracy.percent = payload
    },
    previousIndex(state, payload) {
      state.previous.index = payload
    },
    finished(state, payload) {
      state.finished = payload
    },
    fedback(state, payload) {
      state.fedback = payload
    },
    score(state, payload) {
      state.score = payload
    },
    increment(state, payload) {
      state.increment = payload
    },
    answerSet(state, payload) {
      state.answer.set = payload
    },
    answerCorrect(state, payload) {
      state.answer.correct = payload
    },
    answerAlternatives(state, payload) {
      state.answer.alternatives = payload
    },
  }
});