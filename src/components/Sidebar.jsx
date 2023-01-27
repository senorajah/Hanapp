import React, { useState } from "react";
import Logo from "../components/imgs/Picture2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//icons
import { UilBars } from "@iconscout/react-unicons";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../components/Data/Data.js";
import './Sidebar.css';



const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '28%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            
            <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <item.icon />
                  <span className="heading">{item.heading}</span>             
                </Link>
            </li>
          );
        })}

        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;


              