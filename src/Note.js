import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const updateId = props.note.id;
    props.onType(updateId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const updateId = props.note.id;
    props.onType(updateId, "description", updatedValue);
  };
  const clickDelete = () => props.remove(props.note.id);
  return (
    <li className="note">
      <input
        onChange={updateTitle}
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
      />
      <textarea
        onChange={updateDescription}
        placeholder="Description..."
        className="note__description"
        value={props.note.description}
      />
      <span onClick={clickDelete} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
