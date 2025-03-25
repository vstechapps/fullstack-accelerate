# Simple Calculator - Requirements Document

## 1. Introduction
The Simple Calculator is a console-based application that performs basic arithmetic operations. Users can enter numbers and an operator to calculate the result.

## 2. Functional Requirements
- **User Inputs**:
  - First number (integer/decimal).
  - Operator (`+`, `-`, `*`, `/`, `%`).
  - Second number (integer/decimal).
- **Operations Supported**:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
  - Modulus (`%`)
- **Output**:
  - Display the calculation result.
- **Looping Feature**:
  - Ask the user if they want to continue.
  - Exit if the user enters `"no"`.

## 3. Non-Functional Requirements
- **Error Handling**:
  - Handle division by zero.
  - Validate numeric input.
  - Reject invalid operators.
- **User Interface**:
  - Clear prompts for input.
  - Properly formatted output.
- **Performance**:
  - Execute calculations instantly.
  - Minimal memory usage.


## 4. Flowchart

```mermaid

graph TD;
  Start --> |User inputs first number| Input1;
  Input1 --> |User inputs operator (+, -, *, /, %)| Operator;
  Operator --> |User inputs second number| Input2;
  
  Input2 --> |Check operator| Decision;
  
  Decision -->|Addition (+)| Add[Perform Addition] --> DisplayResult;
  Decision -->|Subtraction (-)| Sub[Perform Subtraction] --> DisplayResult;
  Decision -->|Multiplication (*)| Mul[Perform Multiplication] --> DisplayResult;
  Decision -->|Division (/)| CheckDiv;
  Decision -->|Modulus (%)| Mod[Perform Modulus] --> DisplayResult;
  
  CheckDiv --> |Zero?| DivZero{Division by Zero?};
  DivZero -->|Yes| ErrorMsg[Show Error: Division by Zero] --> Restart;
  DivZero -->|No| Div[Perform Division] --> DisplayResult;

  DisplayResult --> AskContinue;
  AskContinue -->|Yes| Start;
  AskContinue -->|No| End;
  
  Restart --> Start;
  
```
