import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerThunk } from "./auth-thunks";

// implement the register screen
function RegisterScreen() {
  const [user, setUser] = useState({});
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      // const data = {
      //   username: username,
      //   password: password,
      //   firstName: firstName,
      //   lastName: lastName,
      // };
      await dispatch(registerThunk(user));
      navigate("/tuiter/profile");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h1>Register Screen</h1>

      <input
        className="form-control"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        className="form-control"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <input
        className="form-control"
        type="text"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />

      <input
        className="form-control"
        type="text"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />

      <button className="btn btn-primary mt-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
export default RegisterScreen;
