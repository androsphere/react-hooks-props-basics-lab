import React from "react";
import Links from "./Links";

function isBio(stuff) {
  if (!stuff.bio) {
    return null;
  }

  return (
    <p>{stuff.bio}</p>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */
       <Links url1 = {props.link1} url2 = {props.link2} />
      }
    </div>
  );
}


export default About;
