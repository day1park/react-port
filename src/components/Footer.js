import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-5 p-4 text-center">
      DAY PARK &copy; {new Date().getFullYear()}
    </footer>
  );
}
