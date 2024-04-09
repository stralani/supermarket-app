import React, { useState, ReactNode } from "react";
import "./Dropdown.scss";
import { Dropdown as MuiDropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { Navigate, useNavigate } from "react-router-dom";
import { pb } from "../pocketBase";

type DropDown = {
  trigger: ReactNode;
};

function Dropdown({ trigger }: DropDown) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const handleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <MuiDropdown>
      <MenuButton>{trigger}</MenuButton>
      <Menu>
        <MenuItem>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </MenuItem>
        <MenuItem
          onClick={() => {
            pb.authStore.clear();
            navigate("/");
          }}
        >
          logout
        </MenuItem>
      </Menu>
    </MuiDropdown>
  );
}

export default Dropdown;
