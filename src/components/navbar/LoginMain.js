import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginMain = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        console.log(e.target.value);
        const { value, name } = e.target;
        console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            localStorage.setItem("userData",JSON.stringify([...data,inpval]));
            history("/")
        }

    }

    return (
        <>
           <div style={{display: "flex", justifyContent: "center", height: "100vh"}}>
      <div style={{border: "4px solid black", height: "250px",width: "300px", marginTop: "50px", textAlign: "center", fontSize: "20px"}}>
        <h3 className="text-center col-lg-6">Welcome To Flipkart</h3>
        <Form style={{paddingTop: "10px"}} onSubmit={addData}>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail1">
            <Form.Control
              type="text"
              name="name"
              onChange={getdata}
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail2">
            <Form.Control
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword" style={{paddingBottom: "20px"}}>
            <Form.Control
              type="password"
              name="password"
              onChange={getdata}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            className="col-lg-6"
            style={{ color: "white",background: "black", fontSize: "20px", width: "100px", height: "28px", borderRadius: "10px"}}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
        </>
    )
}

export default LoginMain;