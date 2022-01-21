import React from "react";
import ChangeHistory from "@material-ui/icons/ChangeHistory";
import "./styles.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <ChangeHistory />
            <h1>Trello Board Clone</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
