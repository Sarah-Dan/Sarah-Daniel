import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setIsFormSubmitted(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Have a drink & chat with me</h2>

      <div className="app__footer--cards">
        <div className="app__footer--card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@sarahdaniel.com" className="p__text">
            hello@sarahdaniel.com
          </a>
        </div>
        <div className="app__footer--card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 (806) 738-5684 " className="p-text">
            +234 (806) 738-5684
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer--form app__flex">
          <div className="app__flex">
            <input
              className="p__text"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p__text"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p__text"
              placeholder="Enter your message"
              type="text"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p__text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <p className="head__text">Thank you for getting in touch!🙏</p>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
