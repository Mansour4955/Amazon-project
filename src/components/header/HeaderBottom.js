<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "../SideNavContent";
import { motion } from "framer-motion";
import {useSelector} from "react-redux"
const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click",(e)=> {
        if (e.target.contains(ref.current)) {
            setSidebar(false)
        }
    })
  }, [ref,sidebar]);
  return (
    <div className="w-full px-4 h-9 bg-amazon_light text-white flex items-center">
      {/*  */}
      <ul className="flex gap-2 items-center text-sm">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1">
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/*  */}
      {/*  */}
      {sidebar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-4/5 md:w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {
                  userInfo ? <img src={userInfo.image} alt="UserImg" className="w-10 h-10 rounded-full"/>
                  : <AccountCircleIcon />
                }
                {
                  userInfo ? <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  {userInfo.userName}
                </h3> : <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
                }
                
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default HeaderBottom;
=======
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "../SideNavContent";
import { motion } from "framer-motion";
import {useSelector} from "react-redux"
const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click",(e)=> {
        if (e.target.contains(ref.current)) {
            setSidebar(false)
        }
    })
  }, [ref,sidebar]);
  return (
    <div className="w-full px-4 h-9 bg-amazon_light text-white flex items-center">
      {/*  */}
      <ul className="flex gap-2 items-center text-sm">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1">
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/*  */}
      {/*  */}
      {sidebar && (
        <div className=" w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-4/5 md:w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {
                  userInfo ? <img src={userInfo.image} alt="UserImg" className="w-10 h-10 rounded-full"/>
                  : <AccountCircleIcon />
                }
                {
                  userInfo ? <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  {userInfo.userName}
                </h3> : <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
                }
                
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default HeaderBottom;
>>>>>>> 6d7858233edd166cd04ec5265f9d09fd6e302ba5
