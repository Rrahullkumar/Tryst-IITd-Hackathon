import React, { useEffect } from "react";
import { usePoints } from "../../features/GameSystem/PointsContext";
import CodeSandboxExercise, { HTMLExercise } from "../../features/CodeSandboxExercise/CodeSandboxExercise";

export default function HtmlActivity() {
  const { addPoints } = usePoints();

  useEffect(() => {
    const handlePoints = (e) => addPoints(e.detail.points);
    window.addEventListener("pointsEarned", handlePoints);
    return () => window.removeEventListener("pointsEarned", handlePoints);
  }, [addPoints]);

  return (
    <div className="activity-page">
      <h1>HTML Basics Challenge</h1>
      <CodeSandboxExercise exercise={HTMLExercise} />
    </div>
  );
}