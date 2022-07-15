import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // refactoring
  //============
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(e) {
  //   setFormData({ ...formData, firstName: e.target.value });
  // }
  // function handleLastNameChange(e) {
  //   setFormData({ ...formData, lastName: e.target.value });
  // }

  // generic handleChange function
  //==============================
  function handleChange(e) {
    const name = e.target.name; //name is KEY of formData obj we're updating
    let value = e.target.value;

    //use 'checked' property for checkboxes instead of 'value'
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // handleSubmit
  //=============
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
