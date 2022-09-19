import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  let date =  new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>{date} Ecommerce &copy; All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;
