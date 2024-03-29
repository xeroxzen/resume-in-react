import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilePic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const country = this.props.data.address.country;
    const phone = this.props.data.phone;
    const whatsapp = this.props.data.whatsapp;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumeDownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilePic}
                alt="Google Jr Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Andile</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Information</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {country}
                    </span>
                    <br />
                    <span>{phone} (Calls)</span>
                    <br />
                    <span>{whatsapp} (WhatsApp)</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href={resumeDownload}
                      className="button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
