let score = 0

function showScore() {
  const totalScore = document.getElementById('score-message');

  if (score === 10) {
    totalScore.innerHTML = score + "You got all of the questions right!";
  }else if (10 > score && 1 <= score){
    totalScore.innerHTML =  "Your total score is " + score;
  }else{
    totalScore.innerHTML = score + "Try again!";
  }
}

const correct = 'Bingo!';
const incorrect = 'Wrong!';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = 'First question:' + quiz_1.answer.value;

  if (quiz_1.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_1.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(incorrect);
  }else if (quiz_1.answer.value == 'c') {
   console.log(select);
   console.log(correct);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz2() {
  const quiz_2 = document.getElementById('quiz-2');
  const select = 'First question:' + quiz_2.answer.value;

  if (quiz_2.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_2.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_2.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz3() {
  const quiz_3 = document.getElementById('quiz-3');
  const select = 'First question:' + quiz_3.answer.value;

  if (quiz_3.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_3.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_3.answer.value == 'c') {
    score++;
    console.log(select);
   console.log(correct);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz4() {
  const quiz_4 = document.getElementById('quiz-4');
  const select = 'First question:' + quiz_4.answer.value;

  if (quiz_4.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_4.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_4.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz5() {
  const quiz_5 = document.getElementById('quiz-5');
  const select = 'First question:' + quiz_5.answer.value;

  if (quiz_5.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_5.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_5.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz6() {
  const quiz_6 = document.getElementById('quiz-6');
  const select = 'First question:' + quiz_6.answer.value;

  if (quiz_6.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_6.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_6.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz7() {
  const quiz_7 = document.getElementById('quiz-7');
  const select = 'First question:' + quiz_7.answer.value;

  if (quiz_7.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_7.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_7.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz8() {
  const quiz_8 = document.getElementById('quiz-8');
  const select = 'First question:' + quiz_8.answer.value;

  if (quiz_8.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_8.answer.value == 'b') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_8.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz9() {
  const quiz_9 = document.getElementById('quiz-9');
  const select = 'First question:' + quiz_9.answer.value;

  if (quiz_9.answer.value == 'a') {
    score++;
    console.log(select);
    console.log(correct);
  }else if (quiz_9.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_9.answer.value == 'c') {
   console.log(select);
   console.log(incorrect);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

 function answerQuiz10() {
  const quiz_10 = document.getElementById('quiz-10');
  const select = 'First question:' + quiz_10.answer.value;

  if (quiz_10.answer.value == 'a') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_10.answer.value == 'b') {
    console.log(select);
    console.log(incorrect);
  }else if (quiz_10.answer.value == 'c') {
    score++;
   console.log(select);
   console.log(correct);
  }else {
    alert('choose an answer');
  }
  console.log('current score: ' + score);
 }

