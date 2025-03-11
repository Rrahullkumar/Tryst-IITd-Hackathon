import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeSandboxExercise = ({ exercise }) => {
  const [code, setCode] = useState(exercise.starterCode);
  const [result, setResult] = useState(null);

  const validateSolution = () => {
    // Mock validation
    const isCorrect = code.includes(exercise.validationString);
    setResult({
      success: isCorrect,
      message: isCorrect ? "🎉 Perfect! Challenge completed!" : "❌ Keep trying!",
    });

    if (isCorrect) {
      window.dispatchEvent(
        new CustomEvent("pointsEarned", {
          detail: { points: 100, badge: exercise.badge },
        })
      );
    }
  };

  return (
    <div className="codesandbox-container">
      <div className="editor-pane">
        <Editor
          height="60vh"
          defaultLanguage={exercise.language}
          defaultValue={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />
      </div>
      <div className="challenge-pane">
        <h3>{exercise.title}</h3>
        <p>{exercise.description}</p>
        <div className="output-container">
          <button onClick={validateSolution} className="validate-btn">
            Check Solution
          </button>
          {result && (
            <div className={`result ${result.success ? "success" : "error"}`}>
              {result.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock data
export const HTMLExercise = {
  title: "HTML Structure Challenge",
  description:
    "Create a proper HTML5 document structure with <html>, <head>, and <body> tags",
  starterCode: "<!DOCTYPE html>\n",
  language: "html",
  validationString: "<html>",
  badge: "html-basics",
};

export default CodeSandboxExercise;