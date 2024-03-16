import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate=useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredentials.user;
      const formDataCopy={...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp=serverTimestamp();
      await setDoc(doc(db,"users",user.uid),formDataCopy);
      navigate("/");
      console.log(user);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="w-full rounded-2xl "
          />
        </div>
        <div className="">
          <form
            onSubmit={onSubmit}
            className="w-full md:w-[100%] lg:w-[100%] lg:ml-20 space-y-6 "
          >
            <input
              className="w-full px-2 py-1  text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              className="w-full px-2 py-2  text-gray-700 bg-white border-gray-300 rounded transition ease-in-out "
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="relative">
              <input
                className="w-full px-2 py-2  text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3  text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-sm space-x-4">
              <p>
                Already Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-500 hover:text-red-700 transition-duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="relative  w-full bg-blue-600 rounded-xl text-white px-3 py-3 justify center hover:bg-blue-800"
              >
                Sign up
              </button>
              <div className="flex items-center my-1 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                {" "}
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
