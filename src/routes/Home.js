import React, { useState } from "react";
import operalogo from "../assets/images/opera-wordmark.svg";
import IconText from "../components/IconText";
import TextHover from "../components/TextHover";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const focusCardsData = [
    {
      title: "Music Shuttle",
      desc: "Get in for a Musical commute",
      imgUrl:
        "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Sad Hours",
      desc: "When everything around you is falling apart",
      imgUrl:
        "https://images.unsplash.com/photo-1460583733118-86669aff5d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Hangover Cure",
      desc: "Trust us, you need this!",
      imgUrl:
        "https://images.unsplash.com/photo-1496008889433-9b938d8ac880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    },
    {
      title: "Chill Station",
      desc: "Soft chill for the deamy ones!",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1661884021426-c4994d6e809e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Chala Chal",
      desc: "Enjoy your walks with these tunes!",
      imgUrl:
        "https://images.unsplash.com/photo-1653845799349-d0712e23d98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    },
  ];
  const focusCardsData1 = [
    {
      title: "Happy Vibes",
      desc: "Bright, sunny, catchy tunes to put a smile on your face!",
      imgUrl:
        "https://images.unsplash.com/photo-1554825203-68321ddde262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
    },
    {
      title: "Winter of Love",
      desc: "Get cozy and snuggle with the Hindi hits",
      imgUrl:
        "https://images.unsplash.com/photo-1445575722865-82118e5084ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    },
    {
      title: "Desi Hits",
      desc: "Best of South Asian music!",
      imgUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUAAADe4N/g4uHc3t2urq6mpqa7u7vAwMCoqKifn5/Dw8OxsbEEBASrq6u4uLi1tbWLi4uUlJTU1NTIyMiamprO0M+foaDS0tKPj49WVlbn6eiCgoJaWlonKSg+Pj5+fn5sbGxOTk4PDw8gISB2dnZqamozMzNISEg3NzdhYWFBQUEVFxYrLSwkJSVRUVHv8fCqPgdqAAAItElEQVR4nO3Y6ZLiOBIAYGNdloQuSzLGNpjDxd3U+7/dpqna7tmNjZlfM03E5tfdEfjATZJKKUVRIIQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhNB7Wv7p4TtYFrKNVAYnmaiUTGpLk/dMtdlnI3atlLThqWUyGFPPVvDPmbYxntmqqkL6sFS1SgrWt63ZikpaQbUXbSNXyd5+d3wzx0rGZZCc1sI5omrOSR/K2lIpHBmFdCzzPmlOYybloiT1/FXIUa8YbeOUTZTU5TL4mJuar7gQZaMqn0TqWP0GES6LaWT91O58u2PTbmqn3dCmaZLPPfUfux3z08Su7DpO/fVjbPvZxzBO4zX1adrNt157M9zkdWrTejf1u4+JTcHvfD9VvT/97vhmt/Ptcnk8TtthPQzP9Xp9/s9iOuzPw3k7nNfD+Xi8DOfH/bJe75/7y/PnLY/bsL/t4c3wgOdwLo7Py21zuWwv58PvL8xlwaSdRmvaFKOmWjsXBR+G+887tlzkTqXw2dUx+MqPLndd9JrUX5ennimnbB1izMJpR0NxZUHK6iMl+vhdcf0CEVLdcpgytOPcycQYrbhQerf5vmMrfGWiqtvMah4/fI48NjwLnuarE6tSYMw3UcdKG9YERotBUKl1Fbh7jwiD8UG3k8tM2SZRmqxjHYT8PQoflDlrTFYNj46PvY1R2hyTM3DRtzyENsDEWSvGK+mqlrLiGs1O0lEGuvnT//wfkkwntHLzGKMwSnlUwmpZJ6bTq4hOxjSJmZomGpQareayCpmbyhfF0PbwHmpMcjlpJSK31rXFVUVrOKvzO0QIOWwykVY5FpnIolaUOkcTidEJPg+yLVSZcsHIUsax8rSXEb4Cz52Fb8cyIx0XnHeMOa2prWPtisFRJaTqmP7xu+ObyYZoI6RWbadDUikFVbOQ/UcnTDrCKJUkdIHBLdAPuKi088xYExQp7kk4RhtasmsOVne+SdoGX2yyTVXsS/seETKZjQshwUSjrFvplWBiDCsSA9NVUxT3xouq72WquCKvtkYk4dMYdHEJ/INTbRq2UnIK1gvIdpWKIcqQaEuad5hpIIcVyQ3T2pDvEz8GGlXFvZKqT9s/azWPgmvaG+2qcP7j+atiMeimE+9Rh1JDo0lNEnk/H84BHSxPlVNe8syKw+lxOp4em8vx8bhcjj82j9OPx/bxeMAIJgsSFe2FXk09vHkJb5+f8ORUWpmJcO8Roawzh2ZZ8O2v0xPlcTKclOS+/+y6XBMTSdcRUTW6hGOtSIScjx10qtF6xnmQc80tXxk/Q+9gMuvMe+SQNqSiTRmd/kMTuQ8UWgAIsHveYoZ2m2RCFqVlPjW5JGUkpKznibiEA2VhJUm1vP87wptTde1ptvY96jDleaU3LO5/nTzAUg5zD0Q4bUJVlWSxgADLTJgu4SVkbrGYIywMnLQxwF7C12H92iAui71jjax4zcwb5BAidCWNoRkT/9mLLosDM03b1qosr5vgIWsQ1CsuyNl3gF8RFrKzIgXJkpEqpq9iXNO2Ta4hWb9BhMs5hxWXqZXxV7ddHDmkUFDI2/RY2Hrxig1AYOXXK7KoX28vJmhlWmqENol6eZsH6jlOqZHQvr5HDo1R0FemhsU/nJzKHGMUddmdz59zPCVpjFy8lC5xB3G+9hYQz8bEHHPZZaWThm4W5tIcvPENE29ShyFbaUOK7PhVReBIIKpuzhlZnuvXwAzBh0bAC9IEaLb5gqzmO+fbl1XXlTCrllEk46Cab8qlpJv6LXK4LBIvbTIp+Pbnqn2po1NUQLl1DWTpfj8c7scDDOIDuM9leryDX08ZqtzMA1nEnqpNcZmaljUwob5D1zbXoVBMczOq8wFW8c3pWpULBwE7AVMprCD3w/L4P0HEy+UcNCR9ZBmKdhX7Kk3FEAK3TeTNO6yHUIdVOW8dNGz8UgV7obnECEmN6heLTkJCeQNDEgbq/Gf2fQCj9KFThFZ1Ad03NOJQrdDYUtg9rRMTrbEL9Q5z6VyHSi1UI2hiJEfZUNgtvubLjnQCrt+gIBdfc+i8VpSvaXU+rovTZ/d9PKujsTIIwYst407WRMn3yCHsgFkbI224d7L1LgWtVq+YujjX3LkjX1PoK8BAX3NK+Yrw0i26/IrxNcWSkTFoejysh5Ujss1vsgOWLGfVrDjhPlbQjPCJMDt/4s6+GunvCEujiIr8OkbaZQEl+sphFkHyVwNQxibqBBsp/oS069JA60rfYaaBUcrmHUJKsY3cCx55VPMPv109fV0/d4s5xFJPU8pu6jNsjts5yRBhlyBnaVG+bijjChZ/6mFg+1XvYFDzd/itrShgt+CJJnWgzhj6tRB2n3V//14b993XQi+U7/truE5pktB9f0UIAcG+AyL87nQ+FyO85WxZCd+UN++xe2JGtJPJJkXac9LBJzVmff66Nof46mlKAoOQ7caGhzSMSgho5AiM0q85Br4TYlPIUe9e38sz9vWq9/JN9oc/HucNrOfH4nLZnG6X7en+X7fcttvLBRb4wwZW+vO5+HGcW4DN9lIUW7gGLvB3M6+P3+5wy2HzY7t9/P6fvOe5cris18N6fT1fr/vn/rYe9rvh43l+Xs9rOAuXts/ndbc77fbXj+dp+Ljud6fr7mO9P6+H57B+rm/Dfvu8Drvzdbit13t4DJy9rtfwqONff4K/P8LkpOeOVTo7p3VlKFdxrHVlOUvMVEYwHrsYDPmMpPU+tXX8JDqoLjqpaEWrVFnBdD2qaKmpKDxEVcw46yunt3/9Cf5+Ews9G6HPqleRCxHrWtTcqqwF9bB8c8tVbTVUXm37voqsH21dK65drYTlgqveKJej5fX8BKF4rIlt215OntG3iBAhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCKH/V/8CRAS0Lsg6uZMAAAAASUVORK5CYII=",
    },
    {
      title: "Indie India",
      desc: "Best of the Indian music!",
      imgUrl:
        "https://images.unsplash.com/photo-1627822481298-265009fd0c29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    },
    {
      title: "Punjabi Pump",
      desc: "Pump your adrenaline with the punjabi hits!",
      imgUrl:
        "https://images.unsplash.com/photo-1593697723815-e1c957debea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  const focusCardsData2 = [
    {
      title: "Bollywood & Chill",
      desc: "Set back and enjoy bollywood's hits",
      imgUrl:
        "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80",
    },
    {
      title: "Safar Mix",
      desc: "A perfect trravel mix for your journey",
      imgUrl:
        "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Valentine's Hits!",
      desc: "India's ultimate love playlists",
      imgUrl:
        "https://images.unsplash.com/photo-1517331028157-75de91e10628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Tollywood Pearls",
      desc: "The finest set of Telugu music from the past 10 years.",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3_oo86wgW35iiREC-3V9gwQeKzlfgH1nNw&usqp=CAU",
    },
    {
      title: "Hot Hits India",
      desc: "The hottest tracks in India!",
      imgUrl:
        "https://i.scdn.co/image/ab67706c0000da847c2708a3197496e062b50f6c",
    },
  ];

  return (
    <div className=" flex w-full h-full">
      {/* left panel */}
      <div className={"h-full w-1/5 bg-gray-200 lg:block hidden"}>
        {/* div for logo */}
        <div className="pb-4">
          <img src={operalogo} alt="opera" />
        </div>
        <div className="py-4">
          <IconText iconname={"ion:home"} displaytext={"Home"} width="22" />

          <IconText
            iconname={"octicon:search-16"}
            displaytext={"Search"}
            width="22"
          />

          <IconText
            iconname={"fluent:library-28-filled"}
            displaytext={"Library"}
            width="22"
          />
          <IconText
            iconname={"ic:baseline-library-music"}
            displaytext={"My music"}
            width="22"

            // active={currActive==="mymusic"}
          />

          <IconText
            iconname={"icon-park-solid:add"}
            displaytext={"Create Playlist"}
            width="22"
          />
          <IconText
            iconname={"fluent:reading-mode-mobile-24-filled"}
            displaytext={"Instructions"}
            width="23"
            targetLink={"/instructions"}
            // active ={currActive==="instructions"}
          />
        </div>
      </div>

      {/* main content */}
      <div className="lg:w-4/5  w-full h-full overflow-auto">
        {/* navbar */}
        <div className="w-full bg-gray-200 h-1/10 bg-opacity-50 flex  items-center justify-between">
          {/* <div className="sm:w-3/4 w-full  h-full"> */}

          <div className="w-full flex justify-between lg:justify-end items-center sm:px-4 h-full">
            <div className="lg:hidden m-6 ">
              <AiOutlineMenu
                size={25}
                color="#42C83C"
                className="cursor-pointer"
                onClick={handleNav}
              />
            </div>

            <div className="flex">
              <Link to="/signup">
                <div className=" px-4 py-2 bg-slate-100 mx-4 uppercase rounded-full text-sm font-semibold cursor-pointer text-[#42C83C] flex items-center justify-center border-2 border-[#42C83C] hover:text-slate-50 hover:bg-[#42C83C]">
                  sign up
                </div>
              </Link>
              <Link to="/login">
                <button className=" px-4 py-2 bg-[#42C83C] mx-2 uppercase rounded-full text-sm font-semibold cursor-pointer text-white flex border-2 border-[#42C83C] items-center justify-center">
                  log in
                </button>
              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* body */}
        <div className="bg-slate-50 p-8 pt-0 overflow-auto">
          <div className={nav? 'fixed left-0 top-0 w-full h-screen bg-black/70':" "}>
            <div className={nav? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[30%] h-screen bg-[#ecf0f3] p-2 md:p-4 ease-in duration-500':
        'fixed left-[-200%] top-0  p-4  duration-100' }>
              {/* div for logo */}
              <div className="flex">
                <div className="pb-4">
                  <img src={operalogo} alt="opera" />
                </div>
                <div
                  onClick={handleNav}
                  color="#42C83C"
                  className="rounded-full shadow-lg  shadow-gray-400 p-3 h-10 w-10 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="py-4">
                <IconText
                  iconname={"ion:home"}
                  displaytext={"Home"}
                  width="22"
                />

                <IconText
                  iconname={"octicon:search-16"}
                  displaytext={"Search"}
                  width="22"
                />

                <IconText
                  iconname={"fluent:library-28-filled"}
                  displaytext={"Library"}
                  width="22"
                />
                <IconText
                  iconname={"ic:baseline-library-music"}
                  displaytext={"My music"}
                  width="22"

                  // active={currActive==="mymusic"}
                />

                <IconText
                  iconname={"icon-park-solid:add"}
                  displaytext={"Create Playlist"}
                  width="22"
                />
                <IconText
                  iconname={"fluent:reading-mode-mobile-24-filled"}
                  displaytext={"Instructions"}
                  width="23"
                  targetLink={"/instructions"}
                  // active ={currActive==="instructions"}
                />
              </div>
            </div>
          </div>
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView
            titleText="Opera Playlists"
            cardsData={focusCardsData1}
          />
          <PlaylistView
            titleText="Sound of India"
            cardsData={focusCardsData2}
          />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="w-full mt-8">
      <div className="font-bold text-xl mb-5">{titleText}</div>
      <div className="w-full flex space-x-4 sm:space-x-2">
        {cardsData.map((item) => {
          return (
            <Card title={item.title} desc={item.desc} imgUrl={item.imgUrl} />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, desc, imgUrl }) => {
  return (
    <div className="bg-black p-4  md:w-1/5 rounded-lg cursor-pointer">
      <div className="pb-2 ">
        <img className="w-full rounded-md" src={imgUrl} alt="label image" />
      </div>
      <div className="text-white text-sm font-semibold py-2">{title}</div>
      <div className="text-xs text-gray-400 pr-6">{desc}</div>
    </div>
  );
};
export default Home;
