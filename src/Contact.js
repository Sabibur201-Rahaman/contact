import React, { Component } from "react";
// import styles from "./style/Contact.module.css";
const contactStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  // backgroundColor: "red",
};
export default class Contact extends Component {
  render() {
    console.log(this.props);
    const { contact } = this.props;
    return (
      <div className={`card contact my-4 text-center }`} style={contactStyle}>
        {" "}
        <div className="card-body">
          <h2 className="card-title">
            {contact.first_name}
            {contact.last_name}
          </h2>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.gender}</p>
          <p className="card-text">{contact.dob}</p>
        </div>
      </div>
    );
  }
}
