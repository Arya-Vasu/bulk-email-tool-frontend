// import logo from './logo.svg';
import React, { createContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { SendMailForm } from "./SendMailForm";
import { Header } from "./Header";
import { LogIn } from "./LogIn";
import { Register } from "./Register";
import { Home } from "./Home";

export const ctx = createContext(null);
export const mailData = createContext([]);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allMails, setAllMails] = useState([
    {
      id: 0,
      from: {
        name: "Vasu Arya",
        email: "vasu@gmail.com",
        mobile: "8439159959",
      },
      to: [
        {
          name: "Raksha Singh",
          email: "raksha@gmail.com",
          mobile: "9876543211",
        },
        {
          name: "Karan Mahariya",
          email: "karan@gmail.com",
          mobile: "9876543212",
        },
      ],
      cc: [
        {
          name: "Ayush Thakur",
          email: "ayush@gmail.com",
          mobile: "9876543213",
        },
      ],
      bcc: [
        {
          name: "Vinod Kumar",
          email: "vinod@gmail.com",
          mobile: "9876543214",
        },
      ],
      subject: "Test Mail 1",
      dateTime: "Tue 10-01-2023 10:00:00",
      message:
        "Hi All, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isArchived: false,
      isDeleted: false,
      isDraft: false,
      isStarred: false,
      markRead: true,
      isselected: false,
    },
    {
      id: 1,
      from: {
        name: "Raksha Singh",
        email: "raksha@gmail.com",
        mobile: "9876543211",
      },
      to: [
        {
          name: "Vasu Arya",
          email: "vasu@gmail.com",
          mobile: "8439159959",
        },
        {
          name: "Karan Mahariya",
          email: "karan@gmail.com",
          mobile: "9876543212",
        },
      ],
      cc: [
        {
          name: "Ayush Thakur",
          email: "ayush@gmail.com",
          mobile: "9876543213",
        },
      ],
      bcc: [
        {
          name: "Vinod Kumar",
          email: "vinod@gmail.com",
          mobile: "9876543214",
        },
      ],
      subject: "Test Mail 2",
      dateTime: "Tue 10-01-2023 10:30:00",
      message:
        "Hi All, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isArchived: true,
      isDeleted: false,
      isDraft: false,
      isStarred: false,
      markRead: false,
      isselected: false,
    },
    {
      id: 2,
      from: {
        name: "Karan Mahariya",
        email: "karan@gmail.com",
        mobile: "9876543212",
      },
      to: [
        {
          name: "Raksha Singh",
          email: "raksha@gmail.com",
          mobile: "9876543211",
        },
        {
          name: "Vasu Arya",
          email: "vasu@gmail.com",
          mobile: "8439159959",
        },
      ],
      cc: [
        {
          name: "Ayush Thakur",
          email: "ayush@gmail.com",
          mobile: "9876543213",
        },
      ],
      bcc: [
        {
          name: "Vinod Kumar",
          email: "vinod@gmail.com",
          mobile: "9876543214",
        },
      ],
      subject: "Test Mail 3",
      dateTime: "Tue 10-01-2023 11:00:00",
      message:
        "Hi All, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isArchived: false,
      isDeleted: true,
      isDraft: false,
      isStarred: false,
      markRead: true,
      isselected: false,
    },
    {
      id: 3,
      from: {
        name: "Ayush Thakur",
        email: "ayush@gmail.com",
        mobile: "9876543213",
      },
      to: [
        {
          name: "Raksha Singh",
          email: "raksha@gmail.com",
          mobile: "9876543211",
        },
        {
          name: "Karan Mahariya",
          email: "karan@gmail.com",
          mobile: "9876543212",
        },
      ],
      cc: [
        {
          name: "Vasu Arya",
          email: "vasu@gmail.com",
          mobile: "8439159959",
        },
      ],
      bcc: [
        {
          name: "Vinod Kumar",
          email: "vinod@gmail.com",
          mobile: "9876543214",
        },
      ],
      subject: "Test Mail 4",
      dateTime: "Tue 10-01-2023 11:30:00",
      message:
        "Hi All, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isArchived: false,
      isDeleted: false,
      isDraft: false,
      isStarred: false,
      markRead: false,
      isselected: false,
    },
    {
      id: 4,
      from: {
        name: "Vinod Kumar",
        email: "vinod@gmail.com",
        mobile: "9876543214",
      },
      to: [
        {
          name: "Raksha Singh",
          email: "raksha@gmail.com",
          mobile: "9876543211",
        },
        {
          name: "Karan Mahariya",
          email: "karan@gmail.com",
          mobile: "9876543212",
        },
      ],
      cc: [
        {
          name: "Ayush Thakur",
          email: "ayush@gmail.com",
          mobile: "9876543213",
        },
      ],
      bcc: [
        {
          name: "Vasu Arya",
          email: "vasu@gmail.com",
          mobile: "8439159959",
        },
      ],
      subject: "Test Mail 5",
      dateTime: "Tue 10-01-2023 12:00:00",
      message:
        "Hi All, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isArchived: false,
      isDeleted: false,
      isDraft: false,
      isStarred: true,
      markRead: true,
      isselected: false,
    },
  ]);

  const mailsToBeShown = allMails.filter(
    (value) =>
      value?.from?.email !== "vasu@gmail.com" &&
      value?.isDeleted === false &&
      value?.isArchived === false
  );

  const sentMails = allMails.filter(
    (value) =>
      value?.from?.email === "vasu@gmail.com" &&
      value?.isDeleted === false &&
      value?.isArchived === false
  );

  // const starredMails = allMails.filter((value) => value?.isStarred === true);

  const archivedMails = allMails.filter(
    (value) => value?.isArchived === true && value.isDeleted === false
  );

  const deletedMails = allMails.filter((value) => value?.isDeleted === true);

  // const draftMails = allMails.filter((value) => value?.isDraft === true);

  return (
    <ctx.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <mailData.Provider value={[allMails, setAllMails]}>
        <div>
          <Header />
          {isLoggedIn ? <h1>Mailbox</h1> : ""}
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                mailsToBeShown.map((mails) => <Home mails={mails} />)
              ) : (
                <div>
                  <p>
                    Kindly Login by clicking on a link on top right corner of
                    the page!
                  </p>
                  <p>
                    Please use the below provided test data only as APIs are not
                    created yet 😂.
                  </p>
                  <p>Test Phone: 9876543210</p>
                  <p>Test Password: Mailtool@123</p>
                </div>
              )}
            </Route>
            <Route path="/login">
              <LogIn />
              {/* {isLoggedIn ? <Redirect to="/" /> :  <LogIn />} */}
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/compose">
              {/* <SendMailForm /> */}
              {isLoggedIn ? <SendMailForm /> : <Redirect to="/login" />}
            </Route>
            <Route path="/starred">
              {/* {isLoggedIn ? (
                starredMails.map((mails) => <Home mails={mails} />)
              ) : (
                <Redirect to="/login" />
              )} */}
              <Starred />
            </Route>
            <Route path="/sent">
              {isLoggedIn ? (
                sentMails.map((mails) => <Home mails={mails} sentMail={true} />)
              ) : (
                <Redirect to="/login" />
              )}
              {/* {sentMails.map((mails) => (
                <Home mails={mails} sentMail={true} />
              ))} */}
            </Route>
            <Route path="/trash">
              {isLoggedIn ? (
                deletedMails.map((mails) => <Home mails={mails} />)
              ) : (
                <Redirect to="/login" />
              )}
              {/* {deletedMails.map((mails) => (
                <Home mails={mails} />
              ))} */}
            </Route>
            <Route path="/archived">
              {isLoggedIn ? (
                archivedMails.map((mails) => <Home mails={mails} />)
              ) : (
                <Redirect to="/login" />
              )}
              {/* {archivedMails.map((mails) => (
                <Home mails={mails} />
              ))} */}
            </Route>
            <Route path="/drafts">
              {/* {isLoggedIn ? (
                draftMails.map((mails) => <Home mails={mails} />)
              ) : (
                <Redirect to="/login" />
              )} */}
              {/* {draftMails.map((mails) => (
                <Home mails={mails} />
              ))} */}
              <Drafts />
            </Route>
          </Switch>
        </div>
      </mailData.Provider>
    </ctx.Provider>
  );
}

function Starred() {}

function Drafts() {}
