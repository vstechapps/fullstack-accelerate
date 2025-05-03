<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Now - Fullstack Interest Evaluation</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <style>
        body {
            background: linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%);
            min-height: 100vh;
        }
        .material-icons {
            vertical-align: middle;
            color: #1976d2;
        }
        .question-card {
            border-radius: 1rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            background: #fff;
        }
    </style>
</head>
<body>

    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-7 col-lg-6">
                <div class="card question-card p-4">
                    <div class="text-center mb-4">
                        <span class="material-icons" style="font-size:48px;">quiz</span>
                        <h2 class="fw-bold">Fullstack Course Interest Evaluation</h2>
                    </div>
                    <div id="progress-container" class="mb-4" style="display:none;">
                        <div class="progress">
                            <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%"></div>
                        </div>
                        <div class="text-end small mt-1" id="progress-text"></div>
                    </div>
                    <form id="user-form">
                        <div class="mb-3">
                            <label for="userName" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="userName" required>
                        </div>
                        <div class="mb-3">
                            <label for="userEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="userEmail" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                            <span class="material-icons align-middle">arrow_forward</span>
                            <span class="align-middle">Start Assessment</span>
                        </button>
                    </form>
                    <form id="question-form" style="display:none;">
                        <div id="question-container"></div>
                        <button type="submit" class="btn btn-success w-100 mt-3">
                            <span class="material-icons align-middle">navigate_next</span>
                            <span class="align-middle">Next</span>
                        </button>
                    </form>
                    <div id="thankyou-message" class="text-center" style="display:none;">
                        <span class="material-icons" style="font-size:48px;color:green;">check_circle</span>
                        <h4 class="mt-3">Thank you for your interest!</h4>
                        <p>We have received your responses. We will contact you soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery for AJAX -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
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
                // Here you can send userData and answers to your backend if needed
                return;
            }
            const q = questions[index];
            let html = `<h5>${q.text}</h5>`;
            if (q.options) {
                html += '<div class="list-group">';
                q.options.forEach((opt, i) => {
                    html += `
                        <label class="list-group-item">
                            <input type="radio" name="option" value="${opt.value}" class="form-check-input me-2" required>
                            ${opt.label}
                        </label>
                    `;
                });
                html += '</div>';
            } else if (q.input) {
                html += `<input type="${q.input}" class="form-control" name="option" required>`;
            }
            $('#question-container').html(html);

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
                // If next is a mapping based on answer
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
