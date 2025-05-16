import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const AllUsers = () => {
  const initialUser = useLoaderData();
  const [allUsers, setAllUser] = useState(initialUser);

  const hendleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffey-house-backend.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your user has been deleted.",
                    icon: "success",
                  });
                  const remainingUser = allUsers.filter(user => user._id !== id)
                  setAllUser(remainingUser)
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto max-w-[1320px] mx-auto my-10">
      <div className="md:py-[50px] py-10">
            <Link className="text-3xl hover:bg-secondary rounded-2xl text-primary p-2  font-bold underline" to="/">
                Back to home
            </Link>
        </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <h1>No</h1>
              </label>
            </th>
            <th>Name</th>
            <th>Email & Phone</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <th>
                <label>
                  <h1>{index + 1}</h1>
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar mr-3.5">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.email}
                <br />
                <span className="">{user.phone}</span>
              </td>
              <th>
                <button className="btn ml-1 btn-xs">V</button>
                <button className="btn ml-1 btn-xs">E</button>
                <button
                  onClick={() => hendleDelete(user._id)}
                  className="btn ml-1 btn-xs"
                >
                  D
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
