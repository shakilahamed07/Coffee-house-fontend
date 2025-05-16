import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Coffee_card = ({ coffee, setCoffee, allCoffee }) => {
  const { _id, name, price, photo, supplier } = coffee;

  const hendleRemoveDB = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffey-house-backend.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("remove form db", data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 1500
              });
              const remainimg = allCoffee.filter((coffee) => coffee._id !== id);
              setCoffee(remainimg);
            }
          });
      }
    });
  };

  return (
    <div className="sm:flex justify-between items-center bg-base-200 sm:pr-10 rounded-2xl max-w-[648px] min-w-[358px]">
      <div className="">
        <img
          className="mx-auto sm:mx-0 w-[px] h-[192px] p-3"
          src={photo}
          alt=""
        />
      </div>

      <div className="text-center sm:text-start sm:mr-12 ">
        <p>
          <span className="font-bold">Name: </span>
          {name}
        </p>
        <p>
          <span className="font-bold">Name: </span>
          {price}
        </p>
        <p>
          <span className="font-bold">Name: </span>
          {supplier}
        </p>
      </div>

      <div className="sm:block flex justify-center items-center gap-3 mt-6 sm:mt-0">
        <Link to={`/coffee-details/${_id}`}>
          <button className=" bg-secondary py-2 px-3 rounded-md text-white mb-3">
            <FaEye size={20} />
          </button>
        </Link>
        <br />

        <Link to={`/update-coffee/${coffee._id}`}>
          <button className=" bg-black py-2 px-3 rounded-md text-white mb-3">
            <MdEdit size={20} />
          </button>
        </Link>
        <br />

        <button
          onClick={() => hendleRemoveDB(coffee._id)}
          className=" bg-red-600 py-2 px-3 rounded-md text-white mb-3"
        >
          <MdDeleteForever size={20} />
        </button>
      </div>
    </div>
  );
};

export default Coffee_card;
