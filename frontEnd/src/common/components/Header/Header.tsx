import React from "react";
import "./Header.scss";
import { Nav } from "../Nav/Nav.tsx";
import { Button } from "../Button/Button.tsx";

export const Header = () => {
  return (
    <header>
      <Nav />
      <Button text="Sign In" />
    </header>
  );
};
