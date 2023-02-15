import React from "react";
import {Link} from "react-router-dom";
import {NavBar} from "../ui-components";

export default function Root() {
  return (
    <div>
      <NavBar/>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <Link to="/qr-code-generator">Gerador de QR Code</Link>
    </div>
  );
}
