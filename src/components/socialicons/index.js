import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a target="_blank" href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a target="_blank" href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a target="_blank" href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
