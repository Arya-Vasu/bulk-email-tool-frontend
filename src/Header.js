import "./Header.css";
import React, { useContext } from "react";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";
import { ctx } from "./App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useContext(ctx);
  return (
    <div className="globalHeader">
      <Button onClick={() => history.push("/")}>
        <HouseIcon color="primary"></HouseIcon>
      </Button>
      <div className="rightMenu">
        {isLoggedIn ? (
          <BasicMenu />
        ) : (
          <Button onClick={() => history.push("/login")}>LogIn</Button>
        )}
        {/* <BasicMenu /> */}
      </div>
    </div>
  );
}


function BasicMenu() {
  const [isLoggedIn, setIsLoggedIn] = useContext(ctx);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  return (
    <div className="headerList2">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            history.push("/compose");
            handleClose();
          }}
        >
          Compose
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/");
            handleClose();
          }}
        >
          Inbox
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/drafts");
            handleClose();
          }}
        >
          Drafts
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/sent");
            handleClose();
          }}
        >
          Sent
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/archived");
            handleClose();
          }}
        >
          Archived
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/starred");
            handleClose();
          }}
        >
          Starred
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/trash");
            handleClose();
          }}
        >
          Trash
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/");
            setIsLoggedIn(false);
            handleClose();
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
}