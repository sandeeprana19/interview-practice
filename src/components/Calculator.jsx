import React, { useState } from "react";
import {
  Trash,
  Delete,
  Equal,
  Percent,
  Divide,
  X,
  Minus,
  Plus,
  Radical,
} from "lucide-react";

// Problem:
// Create a simple responsive calculator component that performs basic arithmetic operations. It should feature interactive buttons and intuitive behavior for clear, backspace, and evaluation. The operators should be displayed using icons.
// Requirements
// • A container for visual calculator boundary.
// • A display area implemented using an input field:
// Placeholder text: "Enter expression"
// Dynamically updates with user input
// Displays both ongoing expressions and evaluation results
// Input must support the following characters:
// Numbers: 0-9
// Operators: +, -, *, /, %, √
// Parentheses: (and)
// Decimal: .
// Button Grid:
// A grid layout of numeric and operator buttons
// Pressing = evaluates the expression
// Clear button resets the entire input
// Backspace button removes the last character only
// • Use icons from lucide-react for enhanced visual clarity:
// ·
// Clear -> Trash
// Backspace -> Delete
// = -> Equals
// :->
// % -> Percent
// / -> Divide
// X -> X
// -> Minus
// -> Plus
// √ -> Radical
// • Invalid expressions should display Error in the input box

// Edge Cases & Constraints

// • Initial state: display is empty
// • Invalid expressions should not break app
// • Repeated operators must be handled gracefully
// • Equal button should safely evaluate valid expressions
// • Icons must respond on click and be testable
// • Display should align text to the right and scroll if needed

// Example Behaviors

// Example 1: User inputs "7 * 8"
// Display: "7*8"
// On "=" click → Display: "56"

// Example 2: Clear
// Display: "56" → Click Clear (Trash icon)

// Example 3: Backspace
// Display: "5+" → Click Delete icon →

// Example 4: Invalid
// Display: "+" "=" → Error

// Testing Requirements

// Data Test IDs (Required for Testing)

// General Elements

// • data-testid="calc-container"- Test for rendering the container
// • data-testid="calc-display" — Calculator input display field with
// placeholder

// Buttons

// • data-testid="btn-clear" — Clear all input
// • data-testid="btn-sqrt" — Square root operator (√)
// • data-testid="btn-modulus" — Modulus operator (%)
// • data-testid="btn-divide" — Division operator (/)
// • data-testid="btn-7′′ — Number 7
// • data-testid="btn-8′′ — Number 8
// • data-testid="btn-9" — Number 9
// • data-testid="btn-multiply" — Multiplication operator (*)
// • data-testid="btn-4" — Number 4
// • data-testid="btn-5" — Number 5
// • data-testid="btn-6′′ — Number 6
// • data-testid="btn-minus" — Subtraction operator (-)
// • data-testid="btn-1" — Number 1
// • data-testid="btn-2′′ — Number 2
// • data-testid="btn-3′′ — Number 3
// data-testid="btn-plus" — Addition operator (+)
// • data-testid="btn-0" — Number 0
// • data-testid="btn-dot" — Decimal point (-)
// data-testid="btn-open" — Open parenthesis (
// • data-testid="btn-close" — Close parenthesis)
// • data-testid="btn-back" — Backspace/delete last character
// data-testid="btn-equal" — Evaluate expression (=)

// Icon-Specific Elements

// • data-testid="icon-clear" — Icon inside clear (Trash)
// • data-testid="icon-backspace" — Icon inside backspace (Delete)
// • data-testid="icon-equals" - Icon inside equals button (Equals)
// • data-testid="icon-sqrt"— Icon inside Squareroot button (Radical)
// • data-testid="icon-percent"— Icon inside modulus button (Percent)
// • data-testid="icon-divide❞— Icon inside divide button (Divide)
// • data-testid="icon-multiply"— Icon inside multiply button (X)
// • data-testid="icon-minus"— Icon inside minus button (Minus)
// • data-testid="icon-plus"— Icon inside plus button (Plus)

function Calculator() {
  const [expression, setExpression] = useState("");

  console.log(expression);

  const handleButtonClick = (value) => {
    setExpression((prev) => {
      console.log(prev);
      return prev + value;
    });
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleBackspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  return (
    <div className="c-calculator">
      <div className="calculator-container">
        <h1 className="title">Simple Calculator</h1>
        <input className="display" placeholder="Enter expression" readOnly />

        <div className="button-grid">
          <button className="clear-btn">
            <span className="icon-clear">
              <Trash />
            </span>
          </button>
          <button>
            <span className="icon-sqrt">
              <Radical />
            </span>
          </button>
          <button>
            <span className="icon-percent">
              <Percent />
            </span>
          </button>
          <button>
            <span className="icon-divide">
              <Divide />
            </span>
          </button>

          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button>
            <span className="icon-multiply">
              <X />
            </span>
          </button>

          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button>
            <span className="icon-minus">
              <Minus />
            </span>
          </button>

          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button>
            <span className="icon-plus">
              <Plus />
            </span>
          </button>

          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("(")}>(</button>
          <button onClick={() => handleButtonClick(")")}>)</button>

          <button className="back-btn">
            <span className="icon-backspace">
              <Delete />
            </span>
          </button>
          <button className="equal-btn">
            <span className="icon-equal">
              <Equal />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
