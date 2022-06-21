import { useState } from "react";
import Router from "next/router";
import Link from "next/link";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [formObject, setFormObject] = useState({});
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const confirmPassword = (event) => {
    setConfPassword(event.target.value);
  };
  const handleSubmit = () => {
    event.preventDefault();
    alert("Form Submitted sucessfully");
    let formObject = {
      name: name,
      email: email,
      password: password,
    };
    setFormObject(formObject);
    console.log(formObject);
  };
  return (
    <>
      <h3 className="text-center">Forms</h3>
      <div className="container">
        <form>
          <div className="form-row">
            <div className="col-12 py-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className="col-12 py-3">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="col-12 py-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="pswd"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="col-12 py-3">
              <input
                type="password"
                className="form-control"
                placeholder="conform password"
                name="conformpswd"
                onChange={confirmPassword}
                value={confPassword}
              />
            </div>
          </div>
          <button
            className="btn btn-primary col-12 my-2"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button className="btn col-12 mt-4" style={{background:"aquamarine"}}>
            <Link  href={"/pagination"}>Pagination</Link>
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
