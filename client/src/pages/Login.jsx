import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import PasswordInput from "../components/Input/PasswordInput";
import { isValidEmail } from "../utils/helper";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleLogin = async (e) =>{
    e.preventDefault();

    if(!isValidEmail(email)){
      setError("Please enter valid email!!")
      return;
    }

    if(!password){
      setError("Please enter password")
      return;
    }


    setError("")
  }



  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-gray-400 rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login form</h4>

            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm bg-transparent border border-gray-400 px-5 py-3 rounded mb-4 outline-none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <PasswordInput value={password} OnChange={(e)=>setPassword(e.target.value)}/>


            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              className="w-full bg-blue-900 text-white p-3 rounded-lg my-2 transition-all duration-300 hover:bg-blue-700 hover:cursor-pointer"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link
                to="/sign-up"
                className="underline text-blue-600 font-medium"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
