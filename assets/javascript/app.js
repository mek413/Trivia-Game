$(document).ready(function(){
    var qOneAns = [5,7,9,1];
    var qTwoAns = ['Nappa','Goku','Vegeta','Piccolo'];
    var qThreeAns = ['Super Saiyan','Ultra Saiyan','Great Saiyan','Strong Saiyan'];
    var qFourAns = ['Final Flash','Special Beam Cannon','Destructo Disc','Kamehameha'];
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var notAnswer = 0;
    var intervalId;
    var clockRunning = false;
    var timeLeft = 30;
    function gameOver (){
        var choiceOne = $('input[type=radio][name=answer]:checked').val();
            var choiceTwo = $('input[type=radio][name=answer2]:checked').val();
            var choiceThree = $('input[type=radio][name=answer3]:checked').val();
            var choiceFour = $('input[type=radio][name=answer4]:checked').val();
        // unanswered questions
                if(!$('input[type=radio][name=answer]').is(':checked')){notAnswer++;}
                if(!$('input[type=radio][name=answer2]').is(':checked')){notAnswer++;}
                if(!$('input[type=radio][name=answer3]').is(':checked')){notAnswer++;}
                if(!$('input[type=radio][name=answer4]').is(':checked')){notAnswer++;}
                console.log(notAnswer + ' unanswered');
        // correct answers
            if (choiceOne === '7'){ correctAnswers++;}
            if (choiceTwo === 'Vegeta'){ correctAnswers++;}
            if (choiceThree === 'Super Saiyan'){ correctAnswers++;}
            if (choiceFour === 'Kamehameha'){ correctAnswers++;}
        // incorrect answers
                if (choiceOne !== '7' && $('input').is(':checked')){ incorrectAnswers++;}
                if (choiceTwo !== 'Vegeta' && $('input').is(':checked')){ incorrectAnswers++;}
                if (choiceThree !== 'Super Saiyan' && $('input').is(':checked')){ incorrectAnswers++;}
                if (choiceFour !== 'Kamehameha' && $('input').is(':checked')){ incorrectAnswers++;}
                
                
                $('.question-container').hide();
                $('.game-button').hide();
                var resultDiv = $("<div>")
                var numCorrect = $("<p>").text('Correct Answers: ' + correctAnswers);
                var numIncorrect = $("<p>").text('Incorrect Answers: ' + incorrectAnswers);
                var numUnanswered = $("<p>").text('UnAnswered: ' + notAnswer);
                resultDiv.append(numCorrect,numIncorrect,numUnanswered)
                $('.results').append(resultDiv);
                $(".game-time").hide();
                timeLeft = -1;
                $('.results').show();
    }
    $('.button').on('click', start);
    function start() {
        if (!clockRunning) {
          intervalId = setInterval(counter, 1000);
          clockRunning = true;
        }
      }
      function counter() {
        timeLeft--;
        $(".game-time").html("<h1>Time Remaining: " + timeLeft + " seconds</h1>");
        if (timeLeft == 0){
            clockRunning = false
            gameOver();
            $(".game-time").hide();
        }
      }
      
    $('.button').on('click', function(){
        clockRunning = true;
        // Variable that stores the questions in a new div.
        var questionDiv = $("<div>");
        // Variable is made to store the question in a h2 element.
        var qOne = $("<h2>").text("How many Dragon Balls are needed in order to summon Shenron?");
        // Displaying the variable in the new div.
        questionDiv.append(qOne);
        // Writing the new div into the already made question div in index.
        $('.question-one').prepend(questionDiv);
        for (i=0;i<qOneAns.length;i++){
            var input = $("<div>");
            input.addClass("question-one-answer");
            var answers = $("<input type='radio' class='qOneAnswer' name='answer'>");
            answers.attr('value', qOneAns[i]);
            var answerText = $('<h3>').text(qOneAns[i]);
            input.append(answers);
            input.append(answerText);
            $('.q-one-inputs').append(input);
        }
        
        // repeat for each question
        var qTwoDiv = $("<div>");
        var qTwo = $("<h2>").text("Who is the prince of all Saiyans?");
        qTwoDiv.append(qTwo);
        $('.question-two').prepend(qTwoDiv);
        for (i=0; i<qTwoAns.length;i++){
            var inputTwo = $("<div>");
            inputTwo.addClass("question-two-answer");
            var answersTwo = $("<input type='radio' class='qTwoAnswer' name='answer2'>");
            answersTwo.attr('value', qTwoAns[i]);
            var answer2Text = $('<h3>').text(qTwoAns[i]);
            inputTwo.append(answersTwo);
            inputTwo.append(answer2Text);
            $('.q-two-inputs').append(inputTwo);
        }
        var qThreeDiv = $("<div>");
        var qThree = $("<h2>").text("What is the name of a Saiyan's transformation?");
        qThreeDiv.append(qThree);
        $('.question-three').prepend(qThreeDiv);
        for (i=0;i<qThreeAns.length;i++){
            var inputThree = $("<div>");
            inputThree.addClass("question-three-answer");
            var answersThree = $("<input type='radio' class='qThreeAnswer' name='answer3'>");
            answersThree.attr('value', qThreeAns[i]);
            var answer3Text = $('<h3>').text(qThreeAns[i]);
            inputThree.append(answersThree);
            inputThree.append(answer3Text);
            $('.q-three-inputs').append(inputThree);
        }
        
        var qFourDiv = $("<div>");
        var qFour = $("<h2>").text("What is Goku's signature move?");
        qFourDiv.append(qFour);
        $('.question-four').prepend(qFourDiv);
        for (i=0; i<qFourAns.length;i++){
            var inputFour = $("<div>");
            inputFour.addClass("question-two-answer");
            var answersTwo = $("<input type='radio' class='qFourAnswer' name='answer4'>");
            answersTwo.attr('value', qFourAns[i]);
            var answer4Text = $('<h3>').text(qFourAns[i])
            inputFour.append(answersTwo);
            inputFour.append(answer4Text);
            $('.q-four-inputs').append(inputFour);
        }
        // Hides the start button so it can be replaced for a submit button.
        $('.button').hide();
        // Creating a submit button for the answers
        var submitButton = $('<div class="submit-button">').text("Submit");
        $('.game-button').append(submitButton);
        $('.submit-button').on('click', gameOver);
        
    });
});