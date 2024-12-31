import React, { useEffect, useState } from "react";
import { GetProfie } from "../server/Api/api";

const Profie = () => {
  useEffect(() => {
    GetProfieData();
  }, []);

  const [GetMypost, setGetMypost] = useState([]);

  const GetProfieData = () => {
    GetProfie(setGetMypost);
  };

  return (
    <div className="pt-16 flex justify-center ">
      <div className="max-w-[600px] h-max border rounded-lg">
        <div className="flex justify-evenly">
          <div className="h-fit">
            <img
              className="w-[160px] h-[160px] object-contain rounded-full"
              src="https://images.unsplash.com/photo-1692261853713-4d283f65a6ee?q=80&w=1974auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-around">
            <h2 className="text-4xl font-semibold text-center">John Doe</h2>
            <div className="flex">
              <p>40 posts</p>
              <p>100 followers</p>
              <p>100 following</p>
            </div>
          </div>
        </div>
        <hr className="w-[90%] m-[auto] opacity-[0.8]  my-[25px] mx-[auto]" />
        <div className="gallery flex flex-wrap">
          {GetMypost.map((e, index) => {
            return (
              <img
                key={index}
                className="w-[30%] p-[10px]"
                src={e.photo}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profie;
