import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../Redux/UserReducer";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users || []);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id, name, email }));
    navigate('/')
  };

  return (
    <div className="container">
      <h1>Welcome to the Create Page</h1>
      <p>
        This is a simple React application with CRUD operations.
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <form className="p-5 border rounded bg-light" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
