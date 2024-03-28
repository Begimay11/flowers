import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registr = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const addFlowerHandler = (e) => {
    e.preventDefault();

    const addList = {
      name: name,
      pass: pass,
      id: Date.now(),
    };
    dispatch({ type: "ADD", payload: addList });
    setName("");
    setPass("");
    navigate("/admin");
  };
  return (
    <div id="registr">
      <div className="registr">
        <div className="registr__vhod">
          <h2>ВХОД</h2>
          <button>
            <BsXCircle />
          </button>
        </div>
        <div className="registr__num">
          <input
            type="text"
            placeholder="Номер телефона"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Пароль"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          <button onClick={addFlowerHandler}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Registr;
