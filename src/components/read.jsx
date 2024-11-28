import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apidata, setApiData] = useState([]);
  const sendDatatoApi = async () => {
    await axios
      .get(`https://6746b1af38c8741641d3cfa2.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  useEffect(() => {
    sendDatatoApi();
  }, []);

  const setID = (id,Name,UserName,email) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("Name",Name);
    localStorage.setItem("Username",UserName);
    localStorage.setItem("email",email);
  };

  const getData=async()=>{
    await axios
  .get(`https://6746b1af38c8741641d3cfa2.mockapi.io/crud`)
  .then((getData) => {
    setApiData(getData.data);
  });
  };

  
  const onDelete=async(id)=>{
    axios.delete(`https://6746b1af38c8741641d3cfa2.mockapi.io/crud/${id}`)
    .then(()=>{
      getData();
    })
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((data) => {
            return (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.Name}</td>
                <td>{data.Username}</td>
                <td>{data.email}</td>
                <td>
                  <Link to={`/Update/${data.id}`}>
                    <button
                      className="btn btn-success"
                      onClick={() => setID(data.id,Name,UserName,email)}
                    >
                      Upadte
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={"/Read"}>
                    <button className="btn btn-danger" onClick={()=>onDelete(data.id)}>Delete</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
