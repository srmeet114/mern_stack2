import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdMood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GetPosts } from "../server/Api/api";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const tokeen = localStorage.getItem("jwt");
    if (!tokeen) {
      navigate("/signin");
    }
  }, []);

  const [Gpostsdata, setGpostsdata] = useState([]);

  useEffect(() => {
    GetPost();
  }, []);

  const GetPost = () => {
    GetPosts(setGpostsdata);
  };

  return (
    <div className="pt-16 flex flex-col items-center">
      {Gpostsdata.map((e, index) => {
        return (
          <div key={index} className="max-w-[500px] h-max border rounded-lg my-3">
            <div className="flex items-center">
              <div className="">
                <img
                  className="rounded-full w-[30px] h-[auto] p-[5px] object-contain"
                  src="https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <p className="text-lg p-[11px]">{e.postedBy.name}</p>
            </div>
            <div className="w-full">
              <img
                src={e.photo}
                alt=""
              />
            </div>
            <div className="line-[4px] px-[10px] py-[3px] border-b border-[rgb(173,173,173)]">
              <FcLike />
              <p>1 like</p>
              <p>{e.body}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MdMood className="text-2xl" />
                <input
                  className="outline-none p-[10px]"
                  type="text"
                  placeholder="Add a comment..."
                />
              </div>
              <button className="font-medium px-3 text-[#63afe3]">Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
