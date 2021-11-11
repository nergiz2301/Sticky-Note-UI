import React from "react";

const Header = (props) => (
  <header className="container-header">
    <h1>
      <span className="color">Super Sticky Notes</span>
    </h1>
    <aside className="content-container">
      <button className="add-button" onClick={props.addNote}>
        + New Note
      </button>
      <input
        className="input"
        type="text"
        placeholder="Type here to search..."
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
