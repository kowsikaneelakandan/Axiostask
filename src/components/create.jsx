import { useState } from "react";
import axios from "axios";
import "./create.css";
import { useNavigate } from "react-router-dom";


export default function Create() {
  let Navigation =useNavigate();
  const [Name, setName] = useState("");
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const sendDatatoApi =async (e) => {
    e.preventDefault()
    await axios.post(`https://6746b1af38c8741641d3cfa2.mockapi.io/crud`, {
      Name,
      Username,
      email,
    })
    Navigation('/read')
  };
  return (
    <div className="container">
      <form>
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">UserName</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={Username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={sendDatatoApi}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
