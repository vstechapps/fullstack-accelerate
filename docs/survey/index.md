<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Fullstack</title>
    <!-- Materialize CSS & Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%);
            min-height: 100vh;
            font-family: 'Roboto', sans-serif;
        }
        .question-card {
            border-radius: 1rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            background: #fff;
            margin-top: 3rem;
            padding: 30px;
        }
        .question-title {
            color: #1976d2;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }
        .option-radio label {
            font-size: 1.1rem;
            padding-left: 2.5rem;
        }
        .option-radio input[type="radio"]:checked + span {
            color: #1976d2;
        }
        .progress {
            height: 8px;
            border-radius: 4px;
            background-color: #e0e0e0;
        }
        .progress .determinate {
            background-color: #1976d2;
            border-radius: 4px;
        }
        .btn {
            background-color: #1976d2;
            border-radius: 24px;
            font-weight: 500;
            text-transform: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .btn:hover {
            background-color: #1565c0;
        }
        .material-icons {
            vertical-align: middle;
            margin-right: 8px;
        }
        .input-field input:focus + label {
            color: #1976d2 !important;
        }
        .input-field input:focus {
            border-bottom: 1px solid #1976d2 !important;
            box-shadow: 0 1px 0 0 #1976d2 !important;
        }
        .container{
            width:100%;
        }
        .short {
            font-size: 10px;
            color: #CD5C5C;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-8">
                <div class="question-card z-depth-2" style="max-width: 500px;">
                    <div class="center-align">
                        <i class="material-icons large" style="color: #1976d2;">quiz</i>
                        <h4 class="question-title">Interested in Fullstack?</h4>
                    </div>
                    <div id="progress-container" style="display:none;">
                        <div class="progress">
                            <div id="progress-bar" class="determinate" style="width: 0%"></div>
                        </div>
                        <div class="right-align grey-text" id="progress-text" style="margin-bottom: 1rem;"></div>
                    </div>
                    <form id="user-form">
                        <div class="input-field">
                            <i class="material-icons prefix">person</i>
                            <input type="text" id="userName" required>
                            <label for="userName">Your Name</label>
                        </div>
                        <div class="input-field">
                            <i class="material-icons prefix">email</i>
                            <input type="email" id="userEmail" required>
                            <label for="userEmail">Email address</label>
                        </div>
                        <button type="submit" class="btn waves-effect waves-light w-100" style="width:100%;">
                            <i class="material-icons">arrow_forward</i>
                            <span>Start Assessment</span>
                        </button>
                        <div style="text-align: center;">
                        <span class="short">*Take a short survey to get personalized fullstack career guidance.</span>
                        </div>
                    </form>
                    <form id="question-form" style="display:none;">
                        <div id="question-container"></div>
                        <button type="submit" class="btn waves-effect waves-light w-100" style="width:100%;margin-top:1.5rem;">
                            <span>Next</span>
                            <i class="material-icons">navigate_next</i>
                        </button>
                    </form>
                    <div id="thankyou-message" class="center-align" style="display:none;">
                        <i class="material-icons large" style="color: #4caf50;">check_circle</i>
                        <h5 class="question-title">Thank you for your interest!</h5>
                        <p>We have received your responses. We will contact you soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Materialize JS & jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        let questions = [];
        let currentQuestion = 0;
        let answers = [];
        let userData = {};

        // Load questions from JSON
        function loadQuestions(callback) {
            $.getJSON('questions.json', function(data) {
                questions = data.questions;
                callback();
            });
        }

        // Show question by index
        function showQuestion(index) {
            if (index >= questions.length) {
                $('#question-form').hide();
                $('#progress-container').hide();
                $('#thankyou-message').show();
                return;
            }
            const q = questions[index];
            let html = `<h5 class="question-title">${q.text}</h5>`;
            if (q.options) {
                html += '<div class="option-radio">';
                q.options.forEach((opt, i) => {
                    html += `
                        <p>
                            <label>
                                <input class="with-gap" name="option" type="radio" value="${opt.value}" required />
                                <span>${opt.label}</span>
                            </label>
                        </p>
                    `;
                });
                html += '</div>';
            } else if (q.input) {
                html += `
                    <div class="input-field">
                        <input type="${q.input}" name="option" id="optionInput" required>
                        <label for="optionInput">Your Answer</label>
                    </div>
                `;
            }
            $('#question-container').html(html);
            M.updateTextFields();

            // Progress bar
            $('#progress-container').show();
            const percent = Math.round(((index+1)/questions.length)*100);
            $('#progress-bar').css('width', percent + '%');
            $('#progress-text').text(`Question ${index+1} of ${questions.length}`);
        }

        // Handle user form
        $('#user-form').on('submit', function(e) {
            e.preventDefault();
            userData.name = $('#userName').val();
            userData.email = $('#userEmail').val();
            $('#user-form').hide();
            loadQuestions(function() {
                $('#question-form').show();
                showQuestion(0);
            });
        });

        // Handle question form
        $('#question-form').on('submit', function(e) {
            e.preventDefault();
            const q = questions[currentQuestion];
            let answer = $('input[name="option"]:checked').val() || $('input[name="option"]').val();
            answers.push({ question: q.text, answer: answer });

            // Conditional logic for next question
            if (q.next) {
                if (typeof q.next === 'object') {
                    currentQuestion = q.next[answer] !== undefined ? q.next[answer] : currentQuestion + 1;
                } else {
                    currentQuestion = q.next;
                }
            } else {
                currentQuestion++;
            }
            showQuestion(currentQuestion);
        });
    </script>
</body>
</html>
