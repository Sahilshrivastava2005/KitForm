import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import DashBoard from './pages/DashBoard';
import EditForm from './pages/EditForm';
import LiveAiPreview from './components/LiveAiPreview';
import FormResponse from './components/FormResponse' // ⬅️ new import
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.warn("Failed to parse stored user:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
        <Route path="/auth" element={<Auth user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={<DashBoard user={user} setUser={setUser} />} />
        <Route path="/edit-form/:userId/:formIndex" element={<EditForm user={user} setUser={setUser} />} /> 
        <Route path="/aiform/:ownerid/:formid" element={<LiveAiPreview />} />
        <Route path="/form/:formId/responses" element={<FormResponse user={user} />} /> {/* ✅ NEW ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;
