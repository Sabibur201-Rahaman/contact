import React, { Component } from "react";
import Contact from "./Contact";
import contacts from "./data.json";

export default class Contacts extends Component {
  state = {
    contacts,
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h2 className="text-center">all contacts are goes here</h2>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}
