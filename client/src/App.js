import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./app/landingPage/page";
import SignUpPage from "./app/sigup/page";
import CreatePost from "./app/createPost/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [otpVerified, setOTPVerified] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header otpVerified={otpVerified} />
        <div className="routerContainer">
          <Routes>
            <Route path="/" exact Component={LandingPage} />
            <Route
              path="/signup"
              element={
                <SignUpPage
                  otpVerified={otpVerified}
                  setOTPVerified={setOTPVerified}
                />
              }
            />
            <Route path="/createpost" Component={CreatePost} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
