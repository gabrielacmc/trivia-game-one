
$(document).ready(function () {

    var counter = 30
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;


    function timer() {
        counter--;
        $("#timeRemaining").html("<p> Time Remaining: " + counter + " seconds</p>");
        if (counter === 0) {
            stop();
            results();
        }
    }

    function stop() {

        clearInterval(intervalId);
    }

    $("#start").on("click", function () {
        $("#start").addClass("hidden");
        $("#game").removeClass("hidden");
        $("#timeRemaining").removeClass("hidden");
        intervalId = setInterval(timer, 1000);
    });

    function verify(){
    for (i = 1; i<= 4; i++){
        var checkValue = $('input[name=question]:checked').val(); 
            if (checkValue === "correct"){
                correctAnswers++ 
            }
            else if (checkValue === "wrong"){
                incorrectAnswers++
            }
            else{
                unanswered++
            }

    }}

    $("#done").on("click", function(){
        results();
    })

    function results(){
        $("#game").addClass("hidden");
        $("#timeRemaining").addClass("hidden");
        $("#results").removeClass("hidden");
        verify()
        $("#results").html("<h2> All Done! </h2> <p> Correct Answers: " + correctAnswers + "</p><p> Incorrect Answers: " + incorrectAnswers + "</p><p>Unanswered: " + unanswered + "<p>");

    }
});
