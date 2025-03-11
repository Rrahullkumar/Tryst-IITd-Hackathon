// src/services/ai.js
export const analyzePerformance = (userData) => {
    // Mock ML model
    return {
      difficulty: Math.min(1 + (userData.points / 1000), 2),
      recommendedQuests: userData.weakAreas.map(area => ({
        type: 'practice',
        topic: area,
        difficulty: 0.8
      }))
    };
  };