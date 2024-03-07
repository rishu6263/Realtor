import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <div className="cursor-pointer flex items-center justify-center bg-red-700 text-white w-full px-7 py-3 rounded-xl uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-ld active-shadow-lg transition duration-150 ease-in-out">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
      Continue with google
    </div>
  );
}
