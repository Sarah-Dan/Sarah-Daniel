import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import Resume from "../../assets/Resume.pdf";

import "./navbar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar--logo">
        <img src={images.sdlogo} alt="logo" />
        {/* Sarah Daniel */}
      </div>
      <ul className="app__navbar--links">
        {["home", "about", "projects", "skills", "contact" ].map((item, id) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        {/* resume download */}
        <li >
          <a 
            id="resume"
            href={Resume}
            // href="https://docs.google.com/document/d/1yznK8ti27iEXTrzL7LJvqE_3_mgLTerCRdoAbYHCKGE/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              resume
          </a>
        </li>
      </ul>
      

      <div className="app__navbar--menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "projects", "contact" ].map(
                (item, id) => (
                  <li key={{ item }}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
              <li >
          <a 
            id="resume" 
            href="https://docs.google.com/document/d/1yznK8ti27iEXTrzL7LJvqE_3_mgLTerCRdoAbYHCKGE/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              resume
          </a>
        </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
