import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CourseOverview from "./components/CourseOverview";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import IslandSelection from "./components/IslandSelection";
import IslandDashboard from "./components/IslandDashboard";
import HtmlBasics from "./Pages/Activities/HtmlActivity";
// import CssFundamentals from "./Pages/Activities/CssFundamentals";
// import Rewards from "./Pages/Rewards";
import Leaderboard from "./components/Leaderboard";
import { MultiplayerProvider } from "./features/MultiplayerChallenge/multiplayerContext.jsx";
import { PointsProvider } from "./features/GameSystem/PointsContext";
import Quest from "./components/Quest";
import Result from './components/Result';

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  // Check localStorage for user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Handle login/logout
  const handleAuth = (userData) => {
    const userWithDefaults = {
      ...userData,
      progress: userData.progress || {
        "web-dev": 0,
        "digital-marketing": 0,
        "app-dev": 0,
        "cyber-security": 0,
        "data-analytics": 0,
      },
      aiSettings: userData.aiSettings || { difficulty: 1.0 },
      learningStyle: userData.learningStyle || "visual",
      points: userData.points || 0,
      badges: userData.badges || [], // Initialize badges array
    };
    setUser(userWithDefaults);
    localStorage.setItem("user", JSON.stringify(userWithDefaults));
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <PointsProvider>
        {/* <BadgeProvider> */}
          <MultiplayerProvider>
            <div className="App">
              {/* NavBar with Login/Logout Button */}
              <NavBar
                user={user}
                onLogin={() => setShowAuth(true)}
                onLogout={handleLogout}
              />

              {/* Routes */}
              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection
                        user={user}
                        onStartQuest={() => (user ? navigate("/islands") : setShowAuth(true))}
                      />
                      <Features />
                      <CourseOverview />
                      <WhyChooseUs />
                      <Footer />
                    </>
                  }
                />

                {/* Protected Route: Island Selection */}
                <Route
                  path="/islands"
                  element={
                    user ? (
                      <IslandSelection user={user} />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                />

                <Route path="/quest/:questType" element={<Quest />} />

                <Route path="/result" element={<Result />} />

                {/* Protected Route: Island Dashboard */}
                <Route
                  path="/island/:islandId"
                  element={
                    user ? (
                      <IslandDashboard user={user} />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                />

                {/* Activity Pages */}
                <Route
                  path="/activity/html"
                  element={
                    user ? (
                      <HtmlBasics />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                />
                {/* <Route
                  path="/activity/css"
                  element={
                    user ? (
                      <CssFundamentals />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                /> */}

                {/* Rewards Page */}
                {/* <Route
                  path="/rewards"
                  element={
                    user ? (
                      <Rewards user={user} />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                /> */}

                {/* Leaderboard Page */}
                <Route
                  path="/leaderboard"
                  element={
                    user ? (
                      <Leaderboard />
                    ) : (
                      <Navigate to="/" replace />
                    )
                  }
                />
              </Routes>

              {/* Authentication Modal */}
              {showAuth && (
                <AuthModal
                  onClose={() => setShowAuth(false)}
                  onAuth={handleAuth}
                />
              )}
            </div>
          </MultiplayerProvider>
        {/* </BadgeProvider> */}
      </PointsProvider>
    </Router>
  );
}

export default App;