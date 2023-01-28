import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Main } from "./pages/Main";
import { ResetPassword } from "./pages/ResetPassword";
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { StytchProvider } from '@stytch/react';
import { Home } from  './pages/Home';
import { About } from './pages/About';
import { CustomNavbar } from './components/Navbar';

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-df2b8aa2-1229-45ae-a78b-6e524df1d6b8" // TODO: make environment variable 
  );

  const logout = () => { 
    stytchClient.session.revoke();
  }

  return (
    <div className="App">
      <Router> 
        <StytchProvider stytch={stytchClient}>
          <Routes> 
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
            <Route path="/main" element={<Main />} />
          </Routes>  
          <br />
          <button onClick={logout}>Logout</button>
        </StytchProvider>
      </Router> 
    </div>
  );
}

export default App;
