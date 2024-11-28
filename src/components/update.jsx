import { useEffect, useState } from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const[ID,setID]=useState("")
     const {id} = useParams(); 
  const sendDatatoApi =async (e) => {
    e.preventDefault()
    await axios.put(`https://6746b1af38c8741641d3cfa2.mockapi.io/crud/${id}`, {
      Name,
      Username,
      email,
      ID,
    });
    navigate('/read')
  };

  useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setUserName(localStorage.getItem('Username'))
    setEmail(localStorage.getItem('email'))
    setID(localStorage.getItem('ID'))
  },[])
  return (
    <div className="container">
      <form>
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="Name"
            value={Name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">UserName</label>
          <input
            type="text"
            name="Username"
            value={Username}
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={sendDatatoApi}
        >
          Update
        </button>
      </form>
    </div>
  );
}
