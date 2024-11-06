$(document).ready(()=>{
    let results, question, correctAnswer, answers;
    let numberOfQuestions = 10;
    let score = 0;
    let index = 0;

    $(document).load(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=18&type=multiple`, (response) => {
        data = JSON.parse(response);
        results = data.results;
        startGame();
        $("#answer-1").on("click", () => {
            checkAnswer();
        });
    });

    function startGame() {
        nextQuestion();
    }

    function nextQuestion() {
        question = results[index].question;
        correctAnswer = results[index].correct_answer;
        answers = results[index].incorrect_answers;
        answers.push(correctAnswer);
        let candidates = [1, 2, 3, 4];
        for(let i = 0; i < answers.length; i++) {
            console.log(candidates);
            console.log(answers);
            const random = Math.floor(Math.random() * (candidates.length));
            const candidate = candidates[random];
            console.log(random);
            console.log(candidate);
            $(`#answer-${candidate}`).text(answers[i]);
            candidates.splice(candidates.indexOf(candidate), 1);
        }
        display();
    }

    function checkAnswer() {
        if (true) {
            score++;
            display();
        }
        index++;
        if(index < numberOfQuestions) {
            nextQuestion();
        }
    }

    function display() {
        // if(tag == "question") {
        //     $("#question-tag").text(text);
        // }
        // else 
        // {
        //     $("#score-tag").text(text);
        // }
        $("#question-tag").text(question);
        $("#score-tag").text(score);
    }

    async function setTimer(second) {

    }

    function select(element) {

    }
});
