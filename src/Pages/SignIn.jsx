import React from "react";
import { Link } from "react-router";

const SignIn = () => {

    const hendleLoginUser =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email')
        const password = formData.get('password');

        console.log(email, password)
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
        <h1 className="font-bold">Create new account <Link to="/sign-up" className="text-secondary ml-2 underline"> Sign Up</Link></h1>
      </div>
    </div>
  );
};

export default SignIn;
