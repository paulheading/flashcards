
export function selectIndex() {
  const { words, current, previous } = this.$store.state;
  if (current.index !== null) { previous.index.push(current.index); }      
  this.$store.commit('previousIndex', previous.index);

  const random = [];
  for (let i = 0; i < words.length; i++) {
    if (i !== current.index) {
      let match = false;
      if (previous.index.length > 0) {
        previous.index.forEach(value => {
          if (i === value) { match = true; }            
        });            
      }
      if (!match) { random.push(i); }      
    }
  }
  
  if (random.length) {
    // console.log("previousIndex: ", previous.index);
    // console.log("random: ", random);
    const choice = Math.floor((Math.random() * random.length));
    this.$store.commit('currentIndex', random[choice]);
    // console.log("currentIndex: ", current.index);      
  } else {
    this.$store.commit('finished', true);
  }  
}

export function simplify(value) {
  value = value.trim();
  return value.replace(/[.]/g, '');
}

function calcPercentage(a, b) {
  return Math.round((a / b) * 100);
}

export function showFeedback() {
  let { increment, score, question, answer, accuracy, current } = this.$store.state;
  let { guess } = this.$refs;

  this.$store.commit('answerSet', true);
  guess = simplify(guess.value);

  const translate = current.language === 'esp' ? current.word.english : current.word.spanish;
  const original = current.language === 'esp' ? current.word.spanish : current.word.english;

  translate.forEach(value => {
    if (value === guess) {
      let word_length = original[0].split(` `).length;
      score = score + (increment * word_length);
      this.$store.commit('score', score);
      answer.correct = true;
    } else {
      answer.alternatives.push(value);
    }
  });
  
  if (answer.correct) {
    accuracy.count = accuracy.count + 1;
    this.$store.commit('accuracyCount', accuracy.count);
  }

  this.$store.commit('answerCorrect', answer.correct);
  this.$store.commit('accuracyPercent', calcPercentage(accuracy.count, question));

  if (answer.alternatives.length) {
    this.$store.commit('answerAlternatives', answer.alternatives);
  }
  this.$store.commit('fedback', true);
}

export function nextStep() {
  let { guess } = this.$refs;
  guess.value = '';
  this.$store.commit('answerSet', false);
  this.$store.commit('answerCorrect', false);
  this.$store.commit('answerAlternatives', []);
  this.$store.commit('fedback', false);
  this.selectWord();
}

export function selectLanguage() {
  const options = ['esp','eng'];
  return options[Math.floor(Math.random() * options.length)];
}

export function selectWord() {
  const { words, current, question } = this.$store.state;
  this.selectIndex();
  this.$store.commit('currentWord', words[current.index]);
  this.$store.commit('currentLanguage', selectLanguage());
  this.$store.commit('question', question + 1);
}

export function resetGame() {
  this.$store.commit('accuracyPercent', 0);
  this.$store.commit('previousIndex', []);
  this.$store.commit('accuracyCount', 0);
  this.$store.commit('finished', false);
  this.$store.commit('question', 1);
  this.$store.commit('score', 0);
}