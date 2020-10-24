import React, { Component } from "react";

//Style SCSS
import "./contactPage.scss";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contactPage">
        <img src="https://live.staticflickr.com/65535/50337942126_62e60b31c9_o.png"></img>

        <div className="content">
          <h1 className="contactTitle">Contact me:</h1>
          <p>
            You can follow me on my personal{" "}
            <a
              href="https://github.com/eduardohurtado"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            account, or in my personal{" "}
            <a
              href="https://www.linkedin.com/in/eduardo-hurtado-g/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            account.
          </p>
        </div>
      </div>
    );
  }
}
