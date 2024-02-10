import React from "react";

const Footer = function Footer() {
  return (
    <footer className="w-full items-center justify-between space-y-4 bg-gray-800 p-4 text-white">
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold">Theta Tau</h1>
        <p className="text-sm">Omega Epsilon Chapter</p>
        <p className="text-sm">San José State University</p>
      </div>
    </footer>
  );
};

export default Footer;
