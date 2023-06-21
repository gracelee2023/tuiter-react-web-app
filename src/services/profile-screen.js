import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getProfileThunk, logoutThunk, updateUserThunk } from "./auth-thunks";

function ProfileScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // logout handle
  const handleLogout = () => {
    dispatch(logoutThunk());
    // once logout, redirect to the login page
    navigate("/tuiter/login");
  };

  // update handle
  const handleUpdate = async () => {
    try {
      await dispatch(updateUserThunk(profile));
    } catch (error) {
      console.log(error);
    }
  };

  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);

  useEffect(() => {
    const fetchProfile = async () => {
      console.log(currentUser);
      const { payload } = await dispatch(getProfileThunk());
      setProfile(payload);
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <>
          <label>Username</label>
          <input
            className="form-control"
            value={profile.username || ""}
            readOnly
          />
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            value={profile.firstName}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                firstName: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            value={profile.lastName || ""}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                lastName: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
          <label>Password</label>
          <input
            className="form-control"
            value={profile.password}
            type="password"
          />
        </>
      )}
      <button onClick={handleUpdate} className="btn btn-primary">
        update
      </button>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
}

export default ProfileScreen;
