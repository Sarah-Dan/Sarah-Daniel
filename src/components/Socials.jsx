import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="app__social">
      <div>
        <FaGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default Socials;
