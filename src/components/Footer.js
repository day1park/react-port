import React from "react";

export default function Footer() {
  return (
    <footer className="bg-info text-light mt-5 p-4 text-center">
      DAY PARK &copy; {new Date().getFullYear()}
    </footer>
  );
}
