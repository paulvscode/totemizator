let answers = [];
const questions = document.querySelectorAll('.question');
const resultsBtn = document.querySelector('.results');
const resultsDiv = document.querySelector('.results-div');

const storeAnswer = (id) => {
  questionAnswered = document.getElementById(id).value;
  answers.push(questionAnswered);
  document.getElementById(id).disabled = true;
  console.log(answers);
  return answers;
};

const castScore = () => {
  if (answers.length === 0) {
    return;
  }
  let answersInt = answers.map((element) => parseInt(element, 10));
  const score = answersInt.reduce((arr, curr) => {
    return arr + curr;
  });
  gimmeMyResults(score);
};

const gimmeMyResults = (results) => {
  if (results === 0) {
    resultsDiv.textContent = 'Tu es Bam Margera';
  } else if (results >= 5 && results <= 10) {
    resultsDiv.textContent = 'Tu es Grant Taylor';
  } else if (results >= 10 && results <= 15) {
    resultsDiv.textContent = 'Tu es Eric Koston';
  } else if (results >= 15 && results <= 30) {
    resultsDiv.textContent = 'Tu es Jeremy Rogers';
  } else {
    resultsDiv.textContent = 'As-tu essayé la trottinette ?';
  }
};

resultsBtn.addEventListener('click', castScore);
