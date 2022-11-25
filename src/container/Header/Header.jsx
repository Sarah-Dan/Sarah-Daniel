import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header--info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__header--badge">
          <div className="badge--cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p__text">Hello, I am</p>
              <h1 className="head__text">Sarah</h1>
            </div>
          </div>

          <div className="tag--cmp app__flex">
            <p className="p__text">Front-end Developer</p>
            <p className="p__text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header--img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={images.profile} alt="profile__bg" />
        {/* <motion.img
          className="overlay__circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile__circle"
        /> */}
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header--circles"
      >
        {[images.figma, images.react, images.sass].map((circle, index) => (
          <div className="circle--cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
