// src/components/Quest.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Quest = () => {
  const { questType } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const quizzes = {
    html: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        question: "Which tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>"],
        correctAnswer: "<a>",
      },
      {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>"],
        correctAnswer: "<h1>",
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["src", "alt", "title"],
        correctAnswer: "alt",
      },
      {
        question: "Which HTML element defines the document's body?",
        options: ["<body>", "<head>", "<html>"],
        correctAnswer: "<body>",
      },
    ],
    css: [
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
        ],
        correctAnswer: "Cascading Style Sheets",
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "background-color", "bgcolor"],
        correctAnswer: "background-color",
      },
      {
        question: "How do you add a shadow to text?",
        options: ["text-shadow", "font-shadow", "shadow-effect"],
        correctAnswer: "text-shadow",
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["text-style", "font-size", "text-size"],
        correctAnswer: "font-size",
      },
      {
        question: "How do you make a list not display bullets?",
        options: ["list-style: none", "list: no-bullet", "bullet-points: none"],
        correctAnswer: "list-style: none",
      },
    ],
  };

  const quiz = quizzes[questType?.toLowerCase()] || [];

  const handleAnswer = (answer) => {
    if (!quiz.length) return;
    
    if (answer === quiz[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate('/result', { 
        state: { 
          score, 
          total: quiz.length,
          questType,
          recommendations: generateRecommendations(score, quiz.length) 
        } 
      });
    }
  };

  const generateRecommendations = (score, total) => {
    const percentage = (score / total) * 100;
    const baseRecs = {
      html: [
        "Interactive HTML course on CodeAcademy",
        "MDN Web Docs HTML guide",
        "HTML5 Semantic Elements tutorial"
      ],
      css: [
        "CSS Grid Masterclass",
        "Flexbox Froggy game",
        "Advanced CSS Animations course"
      ]
    };

    if (percentage >= 80) return [
      "Advanced Topics:",
      ...baseRecs[questType.toLowerCase()].slice(1),
      "Web Components Tutorial",
      "CSS-in-JS Fundamentals"
    ];

    if (percentage >= 50) return [
      "Intermediate Learning:",
      ...baseRecs[questType.toLowerCase()],
      "Responsive Design Patterns"
    ];

    return [
      "Foundation Building:",
      "HTML Basics Crash Course",
      "CSS Selectors Mastery",
      "Box Model Deep Dive",
      "FreeCodeCamp Responsive Web Design"
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center text-white p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          {questType} Quest
        </h1>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between mb-6 text-blue-400">
            <span>Question {currentQuestion + 1} of {quiz.length}</span>
            <span>Score: {score}</span>
          </div>

          {quiz[currentQuestion] && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                {quiz[currentQuestion].question}
              </h2>
              
              <div className="grid gap-4">
                {quiz[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all 
                             transform hover:scale-[1.02] active:scale-95"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quest;