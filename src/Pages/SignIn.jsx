import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const{LoginUser} = use(AuthContext);

    const hendleLoginUser =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email')
        const password = formData.get('password');

        //* Login user
        LoginUser(email, password)
        .then((result)=>{

          Swal.fire({
            title: "Login successfully!",
            icon: "success",
            draggable: true,
            timer: 3000
          });
          // e.target.reset();

          //* set database lastSignInTime
          const userInfo = {
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime
          }

          fetch('http://localhost:3000/users', {
            method:'PATCH',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
          })
          .then(res =>res.json())
          .then(data =>{
            console.log(data)
          })
        })
        .catch((error) => {
          Swal.fire({
            title: `${error.message}`,
            icon: "error",
            draggable: true,
            timer: 5000
          });
        });
    }

  return (
    <div className="card bg-base-100 mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">
        <h1 className="text-center text-2xl">Login Now!</h1>
        <form onSubmit={hendleLoginUser} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
        </form>
        <h1 className="font-bold">Create new account <Link to="/sign-up" className="text-secondary ml-2 underline"> Sign Up</Link> <Link className="  text-primary p-2  font-bold underline" to="/">
                Back to home
            </Link></h1>
      </div>
    </div>
  );
};

export default SignIn;
