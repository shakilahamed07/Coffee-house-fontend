import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser} = use(AuthContext);
    
    const hendleCreateUser =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...restForm} = Object.fromEntries(formData.entries());

        //* Create user
        createUser(email, password)
        .then((result) => {

            const userProfile ={
                email,
                ...restForm,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime,
            }
            console.log(userProfile)

            //* Database add user
            fetch('https://coffey-house-backend.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title: "User create successfully!",
                        icon: "success",
                        draggable: true,
                        timer: 3000
                      });
                      e.target.reset();
                }
            })
            //* Database end

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
      <div className="card-body">
        <h1 className="text-center text-2xl">Sign Up</h1>
        <form onSubmit={hendleCreateUser} className="fieldset">

          <label className="label">Your Name</label>
          <input type="text" name="name" required className="input" placeholder="Name" />
          
          <label className="label">Address</label>
          <input type="text" name="address" className="input" placeholder="Address" required/>

          <label className="label">Phone</label>
          <input type="text" name="phone" className="input" placeholder="Phone number" required/>

          <label className="label">Photo URL</label>
          <input type="text" name="photo" className="input" placeholder="Photo URL" required/>

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required/>

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" required/>

          <button className="btn btn-primary mt-4">Sign Up</button>

        </form>
        <h1 className="font-bold">Already have an account? Please <Link to="/sign-in" className="text-secondary ml-1 underline">Login</Link></h1>
      </div>
    </div>
  );
};

export default SignUp;
