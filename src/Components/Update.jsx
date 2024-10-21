import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../Redux/UserReducer"; // Import the action

export default function Update() {
  const dispatch = useDispatch();
  const { id } = useParams(); // id will be a string
  const users = useSelector((state) => state.users.users || []);
  const navigate = useNavigate();

  // Find the user with matching ID (convert ID to number if necessary)
  const existingUser = users.find((user) => user.id === parseInt(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (existingUser) {
      dispatch(updateUser({ id: existingUser.id, name: uname, email: uemail }));
      alert("User updated successfully!");
      navigate("/"); 
    }
  };

  // If user doesn't exist, redirect to the home page
  if (!existingUser) return <Navigate to="/" />;

  return (
    <div className="container">
      <h1>Welcome to the Update Page</h1>
      <p>
        This is a simple React application with CRUD operations.
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <form className="p-5 border rounded bg-light" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={uname}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
