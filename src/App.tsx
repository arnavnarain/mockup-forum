import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ResetPassword } from "./pages/ResetPassword";
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { StytchProvider } from '@stytch/react';
import { Home } from  './pages/Home';

function App() {
  const stytchClient = new StytchHeadlessClient(
    process.env.REACT_APP_TOKEN! // TODO: make environment variable 
  );

  const logout = () => { 
    stytchClient.session.revoke();
  }

  return (
    <div className="App">
      <Router> 
        <Link to="/signup"> SignUp</Link>
        <Link to="/auth"> Login</Link>

        <StytchProvider stytch={stytchClient}>
          <Routes> 
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>     
          <button onClick={logout}>Logout</button>
        </StytchProvider>
      </Router> 
    </div>
  );
}

export default App;
