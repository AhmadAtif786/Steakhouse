import React from "react";
import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
const Footer = () => {
  return (
    <footer>
      {" "}
      <div class="socialMedias mt-3 mb-3">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={one} style={{ width: "30px", marginLeft: "15px" }} />
        </a>{" "}
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={two} style={{ width: "30px", marginLeft: "15px" }} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={three} style={{ width: "30px", marginLeft: "15px" }} />
        </a>
        <a
          href="https://t.me/bakedpizzagroup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={four} style={{ width: "30px", marginLeft: "15px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
