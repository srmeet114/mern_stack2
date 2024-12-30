import React from "react";
import { CiImageOn } from "react-icons/ci";

const Createpost = () => {
  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="pt-16 flex justify-center">
      {/* header */}
      <div className="createPost max-w-[600px] my-[10px] border border-[rgb(173,173,173)] rounded-lg">
        <div className="post-header flex justify-between items-center px-[10px]">
          <p className="text-xl mx-4 font-semibold">Create New Post</p>
          <button className="text-[#339ce3] font-semibold">Share</button>
        </div>
        <div className="main-div border-t border-[rgb(173,173,173)] py-2">
            <img className="w-[300px] mt-[5px]" src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-file-upload-icon-png-image_4646955.jpg" id="output" alt="" />
          <input type="file" accept="image/*" onChange={(event)=>{loadFile(event)}} />
        </div>
        {/* details */}
        <div className="details border-t border-[rgb(173,173,173)]">
          <div className="card-header flex items-center">
            <div className="card-pic">
              <img
                className="rounded-full w-[30px] h-[auto] p-[5px] object-contain"
                src="https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <p>Ramesh</p>
          </div>
          <textarea
            className="w-[90%] mx-3"
            name="text"
            placeholder="Write a caption..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
