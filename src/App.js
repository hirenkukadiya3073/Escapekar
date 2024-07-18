import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/RegisterForm";
import Login from "./components/LoginForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
