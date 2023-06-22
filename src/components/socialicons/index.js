import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">

      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank">
              <FaTwitter style={{ fill: ' #1DA1F2' }} />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank">
              <FaFacebookF style={{ fill: '#3B5998' }} />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin style={{ fill: '#007BB5' }} />
            </a>
          </li>
        )}
      </ul>
      <p>Suivez-moi</p>
    </div>
  );
};
