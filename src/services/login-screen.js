import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "./auth-thunks";
import { useNavigate } from "react-router";
const LoginScreen = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    try {
      dispatch(loginThunk(user));
      setTimeout(() => {
        navigate("/tuiter/profile");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <div className="mt-2">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="mt-2">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
export default LoginScreen;
export const qwe = 123;
export const asd = 456;
