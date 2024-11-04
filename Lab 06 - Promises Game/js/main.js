$(document).ready(()=>{
    let results, question, correctAnswer, answers;

    $(document).load("https://opentdb.com/api.php?amount=10&category=18&type=multiple", (response) => {
        data = JSON.parse(response);
        results = data.results;
    });

    function display(text) {

    }

    async function setTimer(second) {

    }

    function select(element) {

    }
});