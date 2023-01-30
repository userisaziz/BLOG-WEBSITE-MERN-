import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="left-col">
          <img
            className="logo"
            src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
          />
        </div>
        <div className="right-col">
          <h1 className="contacth1">Contact me</h1>
          <p className="para">
            Planning to visit Indonesia soon? Get insider tips on where to go,
            things to do and find best deals for your next adventure.
          </p>
          <form id="contact-form" method="post">
            <label htmlFor="name" className="labl">
              Full name
            </label>

            <input
              className="inp"
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required=""
            />
            <label htmlFor="email" className="labl">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required=""
              className="inp"
            />
            <label htmlFor="message" className="labl">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Your Message"
              id="message"
              name="message"
              required=""
              defaultValue={""}
              className="txtar"
            />
            {/*<a href="javascript:void(0)">*/}
            <button type="submit" id="submit" name="submit">
              Send
            </button>
            {/*</a>*/}
          </form>
          <div id="error" />
          <div id="success-msg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
