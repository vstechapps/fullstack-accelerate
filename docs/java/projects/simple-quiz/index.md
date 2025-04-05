# [Home](../../) > Simple Quiz - App Requirements

## 1. Introduction
The Simple Quiz is a console-based application that reads quiz questions from a CSV file and presents them to the user. The user answers the questions, and the system evaluates their responses, providing a final score.

## 2. Functional Requirements
- **User Inputs**:
  - Start the quiz.
  - Answer multiple-choice questions.
- **Quiz Operations**:
  - Read quiz questions from a CSV file.
  - Display each question and possible answers.
  - Validate user input for multiple-choice selection.
  - Keep track of correct answers.
  - Display final score at the end of the quiz.
- **CSV File Format**:
  - Each line contains: `Question,Option A,Option B,Option C,Option D,Correct Answer`
  - Example:
    ```csv
    What is the capital of France?,Paris,London,Berlin,Madrid,A
    ```
- **Output**:
  - Display the question and options.
  - Indicate correct or incorrect responses.
  - Show the final quiz score.

## 3. Non-Functional Requirements
- **Error Handling**:
  - Handle missing or improperly formatted CSV files.
  - Prevent invalid user input (e.g., selecting an option that doesn't exist).
- **User Interface**:
  - Clear text-based prompts.
  - Well-formatted question display.
- **Performance**:
  - Fast file reading and processing.
  - Minimal memory usage.

## 4. Flowchart

[image](!./image.png)
