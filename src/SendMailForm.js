import React, { useState } from "react";
import { SendMail } from "./SendMail";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function SendMailForm() {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const fieldStyles = { width: "100%" };
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "50%",
  };

  // const handleCallback = (items) => {
  //   console.log(items);
  // };
  return (
    <div className="mailForm">
      <form style={styles}>
        {/* <label for="to">To: </label> */}
        <SendMail callFrom="TO" setTo={setTo} />
        {console.log("to: ", to)}
        <br />
        {/* <label for="cc">CC: </label> */}
        <SendMail callFrom="CC" setCc={setCc} />
        {console.log("cc: ", cc)}
        <br />
        {/* <label for="bcc">BCC: </label> */}
        <SendMail callFrom="BCC" setBcc={setBcc} />
        {console.log("bcc: ", bcc)}
        <br />
        <TextField
          style={fieldStyles}
          id="outlined-basic"
          value={subject}
          label="Subject"
          variant="outlined"
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <br />
        <TextField
          required
          style={fieldStyles}
          // id="outlined-basic"
          id="outlined-multiline-flexible"
          value={body}
          label="Body"
          variant="outlined"
          onChange={(e) => setBody(e.target.value)}
          multiline
          maxRows={5}
        />
        <br />
        <div>
          <Button variant="contained">Save as Draft</Button> &nbsp;
          <Button variant="contained">Send Now</Button> &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              setTo("");
              setCc("");
              setBcc("");
              setBody("");
              setSubject("");
            }}
          >
            Discard
          </Button>
        </div>
      </form>
    </div>
  );
}
