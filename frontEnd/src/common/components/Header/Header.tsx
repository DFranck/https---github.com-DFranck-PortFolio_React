import React from "react";
import "./Header.scss";
import { Nav } from "../Nav/Nav";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header>
      <Nav />

      <Button className="sign-in" text="Sign In" />
    </header>
  );
};
