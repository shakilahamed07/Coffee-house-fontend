import React from "react";
import { Link, Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();

    const hendleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee =  Object.fromEntries(formData.entries())

        //* POST database
        fetch('https://coffey-house-backend.vercel.app/coffees', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                  });
                  navigate('/')
            }
        })
    }
  return (
    <div className='md:mb-[120px] mb-10 bg-[url(https://i.ibb.co/0VQJ4bP3/11.png)]' >
      <div className="max-w-[1320px] mx-auto">
        <div className="md:py-[50px] py-10">
            <Link className="text-3xl hover:bg-secondary rounded-2xl text-primary p-2  font-bold underline" to="/">
                Back to home
            </Link>
        </div>
        <div className="py-[70px] md:px-[112px] px-5 mx-2 bg-[#F4F3F0] rounded-md">
          <h1 className="text-5xl font-bold text-center">Add New Coffee</h1>
          <p className="text-center max-w-4xl mx-auto my-8 text-gray-500">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* //*From */}
          <form onSubmit={hendleAddCoffee}>
            <div className=" grid md:grid-cols-2 gap-6">
                {/* //*name input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-white border-none w-full"
                  placeholder="Coffee name"
                  required
                />
              </fieldset>
                {/* //*Chef input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input bg-white border-none w-full"
                  placeholder="Enter coffee Price"
                  required
                />
              </fieldset>
                {/* //*supplier input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="input bg-white border-none w-full"
                  placeholder="Enter coffee Supplier"
                  required
                />
              </fieldset>
                {/* //*Taste input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input bg-white border-none w-full"
                  placeholder="Enter coffee taste"
                  required
                />
              </fieldset>
                {/* //*Category input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input bg-white border-none w-full"
                  placeholder="Enter coffee category"
                  required
                />
              </fieldset>
                {/* //*Details input */}
              <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input bg-white border-none w-full"
                  placeholder="Enter coffee details"
                  required
                />
              </fieldset>
            </div>
            {/* //*Photo input */}
            <fieldset className="fieldset border-none rounded-box border p-4">
                <label className="">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input bg-white border-none w-full"
                  placeholder="Photo URL"
                  required
                />
            </fieldset>
            {/* //*Submit btn */}
            <fieldset className="fieldset border-none rounded-box border p-4">
                <input
                  type="submit"
                  value='Add Coffee'
                  className="bg-secondary text-primary rounded-xl p-2 font-bold md:text-3xl text-2xl border-none w-full"
                />
            </fieldset>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
