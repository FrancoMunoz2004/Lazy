import { AiOutlinePlus } from "react-icons/ai";
import React from "react";
import "./Header.css";
import { useState } from "react";

export const Header = (props) => {
  console.log(props);
  const [name, setLista] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log(name);
    setLista("");
    console.log(description);
    setDescription("");
    if (name.length < 3) {
      setError(true);
    } else {
      setError(false);
      props.createLista({ name, description });
    }
  };

  //inicio para agregar tarea
  return (
    <div className="Header">
      <h1>TASKS LIST</h1>
      <form onSubmit={onSubmit} className="formu">
        <div className="agg">
          <>
            <input
              type="text"
              placeholder="Agregar nueva tarea"
              value={name}
              onChange={(e) => {
                setLista(e.target.value);
              }}
            />
            <br></br>
            {error ? <span className="error">El nombre de la tarea tiene que se mayor a 3</span> : <></>}
          </>
          <div className="textarea">
            <textarea
              placeholder="Agregar description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <button className="IconName">
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default Header;