import React, { useState } from "react";

export default function (props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };

  const handleEmailCheck = () => {
    // Regular expression to match email addresses
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

    // Use the regex to find all email addresses in the textarea content
    const emailsFound = text.match(emailRegex) || [];

    // Update the state with the extracted emails
    setExtractedEmails(emailsFound);
    props.showAlert("Email are extracted", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };

  const [text, setText] = useState("");
  const [extractedEmails, setExtractedEmails] = useState([]);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter the value here"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#1f1f1f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
          ></textarea>
          <div className="btn btn-primary my-2" onClick={handleUpClick}>
            Convert to Upper Case
          </div>
          <div className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
            Convert to Lower Case
          </div>
          <div className="btn btn-primary my-2 mx-2" onClick={handleEmailCheck}>
            Find out all the Email there
          </div>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes it will take to raed</p>
      </div>

      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        Extracted Emails
      </h1>
      <div className="mb-3">
        <ul style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {extractedEmails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
