import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelper"

const Signup = () => {
  
  const [email, setEmail] = useState("")
  const [confirm, setConfirm] = useState("")
  const [password , setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [cookies, setCookie]= useCookies(["token"])
  const navigate = useNavigate();

const signup = async()=>{
     if(email!== confirm)
     {
      alert("Email and Confirm email fields must match")
      return;
     };
    
  const data = {email,password, username, firstname, lastname };
  
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data)
  console.log(response)
    if(response)
    {
      alert("Sucess");
      // console.log(response)
      const token =response.token;
      const date = new Date();
      date.setDate(date.getDate() +30);
      setCookie("token", token, {path:"/", expires:date});
      console.log(cookies.token)
      navigate("/home")
    }
    else{
      alert("Failure");
    }
}

  return (
    <div className="w-full h-full flex flex-col items-center overflow-x-hidden">
      <div className="border-b-2 border-gray-100 w-full flex justify-center ">
        <Icon icon="devicon-plain:opera-wordmark" width="110" color="#42c83c" />
      </div>
      <div className="w-2/3 md:w-1/3 py-8">
        <div className="font-bold flex justify-center items-center mb-10">
         Sign up for free to start listening.
        </div>
        <TextInput label="What's your email?" placeholder="Enter email address" value={email} setValue={setEmail} />
        <TextInput label="Confirm your email?" placeholder="Confirm email address" value={confirm} setValue={setConfirm} />
        <TextInput label="Select your username" placeholder="Enter username"  value={username} setValue={setUsername}/>
        <PasswordInput label="Create a password" placeholder="Choose strong password" value={password} setValue={setPassword} />
        <div className="flex justify-between flex-col lg:flex-row md:items-center "> 
        <TextInput label="First Name" placeholder="Enter your first name" value={firstname} setValue={setFirstname} />
        <TextInput label="Last Name" placeholder="Enter your last name" value={lastname} setValue={setLastname} />
        </div>
        <button className="uppercase my-4 bg-[#42C83C] text-slate-50 w-full py-2 px-4 rounded-lg" onClick={(e)=>{e.preventDefault();signup();}}>
        sign up
        </button>

        <div className="my-4 border w-full border-solid border-gray-300"></div>
        <div className="flex justify-center flex-col items-center">
          <p> Already have an account?</p>
          <Link to="/login" className="w-full">
          <button className=" my-4 border uppercase border-1 rounded-lg py-2 text-[#42C83C] border-[#42C83C] px-4 w-full justify-center text-center hover:text-slate-50 hover:bg-[#42C83C]">
          log in instead
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

