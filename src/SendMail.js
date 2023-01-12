import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export function SendMail({ setTo, setCc, setBcc, callFrom }) {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      if (value && isValid(value)) {
        setItems([...items, value]);
        setValue("");
        // if (callback !== null && callback !== undefined) {
        if (callFrom === "TO") {
          // callback({ to: [...items, value] });
          setTo([...items, value]);
        }
        if (callFrom === "CC") {
          // callback({ cc: [...items, value] });
          setCc([...items, value]);
        }
        if (callFrom === "BCC") {
          // callback({ bcc: [...items, value] });
          setBcc([...items, value]);
        }
        // }
      }
    }
  };

  const handleChange = (evt) => {
    setValue(evt.target.value);
    setError(null);
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d-]+@[\w\d-]+\.[\w\d-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !isInList(email));

      setItems([...items, ...toBeAdded]);
    }
  };

  const isValid = (email) => {
    let error = null;

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setError(error);
      return false;
    }

    return true;
  };

  const isInList = (email) => {
    return items.includes(email);
  };

  const isEmail = (email) => {
    return /[\w\d-]+@[\w\d-]+\.[\w\d-]+/.test(email);
  };

  return (
    <>
      {items.map((item) => (
        <div className="tag-item" key={item}>
          {item}
          <button
            type="button"
            className="button"
            onClick={() => handleDelete(item)}
          >
            &times;
          </button>
        </div>
      ))}

      <TextField
        variant="outlined"
        id="outlined-basic"
        className={"input " + (error && " has-error")}
        value={value}
        // label="Type or paste email addresses and press `Enter`..."
        label={callFrom}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste} />

      {error && <p className="error">{error}</p>}
    </>
  );
}
;
