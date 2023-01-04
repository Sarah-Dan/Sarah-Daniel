import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="app__social">
      <div> 
        <a href="https://github.com/Sarah-Dan" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
      </div>
      <div>
        <a href="https://twitter.com/saahdan" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/sarah.daniels/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      </div>
    </div>
  );
};

export default Socials;
