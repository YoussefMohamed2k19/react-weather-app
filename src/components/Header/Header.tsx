import React from "react";

interface IHeader {
  header: string;
}

const Header = ({ header }: IHeader) => {
  return (
    <div className="text-center fs-4 fw-bold text-capitalize">{header}</div>
  );
};

export default Header;
