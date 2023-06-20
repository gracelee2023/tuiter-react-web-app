// import logo from "./logo.svg";
import "./App.css";
// need to import bootstrap into this project entry file to make responsive layouts
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap.min.css will turn all the web pages into background-color black!!!
// import "./vendors/bootstrap/bootstrap.min.css";
// need to import fontawesome into this project entry file to in order to import icons for the navigation bar
import "./vendors/fontawesome/css/all.min.css";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Assignment3 from "./labs/a3";
import Assignment4 from "./labs/a4";
import Tuiter from "./tuiter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navigation from "./nav";
// import Todo from "./todos";
import { Provider } from "react-redux";
// import { store } from "./tuiter/store";
// import the authentication context
import AuthContext from "./services/auth-context";
import ProtectedRoute from "./services/protected-route";
import LoginScreen, { qwe, asd } from "./services/login-screen.js";
import RegisterScreen from "./services/register-screen";
import ProfileScreen from "./services//profile-screen";
import Users from "./users";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      {/* <AuthContext> */}
      <div className="container">
        {/* <h1>Hello World!</h1> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/labs/a3/" />} />
          {/* <Route path="/todos/*" element={<Todo />} /> */}
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/labs/a3" element={<Assignment3 />} />
          <Route path="/labs/a4" element={<Assignment4 />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />

          {/* <HelloWorld />
          <Labs />
          <Tuiter /> */}
        </Routes>
      </div>
      {/* </AuthContext> */}
    </BrowserRouter>
    // </Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
