import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {CookiesProvider, useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelper"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [cookies,setCookie]= useCookies(["token"])
 
  const navigate = useNavigate();


const login = async()=>{
 
    
  const data = {email,password};
  
    const response =await makeUnauthenticatedPOSTRequest("/auth/login", data)

    if(response && !response.err)
    {
      alert("Sucess");
      // console.log(response)
      const token =response.token
      console.log(response)
      const date = new Date();
      date.setDate(date.getDate() +30);
      setCookie("token", token, {path:"/", expires:date});
      navigate("/home")
    }
    else{
      alert("Failure");
    }
}

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="border-b-2 border-gray-100 w-full flex justify-center ">
        <Icon icon="devicon-plain:opera-wordmark" width="110" color="#42c83c" />
      </div>
      <div className="w-2/3 md:w-1/3 py-8">
        <div className="font-bold flex justify-center items-center mb-12">
          To continue, login to Opera.
        </div>
        <TextInput label="Email Address" placeholder="Email address" value={email} setValue={setEmail} />
        <PasswordInput label="Password" placeholder="password" value={password} setValue={setPassword} />
   
        <button className="uppercase my-4 bg-[#42C83C] text-slate-50 w-full py-2 px-4 rounded-lg" onClick={(e)=>{e.preventDefault(); login();}} >
          log in
        </button>
       

        <div className="my-4 border w-full border-solid border-gray-300"></div>
        <div className="flex justify-center flex-col items-center">
          <p> Don't have an account?</p>
          <Link  to="/signup" className="w-full">
          <button className=" my-4 border uppercase border-1 rounded-lg py-2 text-[#42C83C] border-[#42C83C] px-4 w-full justify-center text-center hover:text-slate-50 hover:bg-[#42C83C]">
           sign up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
