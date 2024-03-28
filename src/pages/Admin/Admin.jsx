import { useDispatch } from "react-redux";
import { useState } from "react";

const Admin = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [flower, setFlower] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const addFlowerList = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("flower")) || [];

    const flowers = {
      id: Date.now(),
      flower: flower,
      price: price,
      category: category,
      text: text,
    };
    let newData = [...data, flowers];
    localStorage.setItem("flower", JSON.stringify(newData));
    setImg('')
    setFlower('')
    setPrice('')
    setCategory('')
    setText('')
    setFileUrl('')

    dispatch({ type: "ADD_LIST", payload: newData });
  };
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setFileUrl(fileReader.result);
  };
  function fileFunc(e) {
    const eventFile = e.target.files[0];
    setImg(eventFile);
    fileReader.readAsDataURL(eventFile);
  }
  return (
    <div id="container">
      <div className="admin">
        <div className="form">
          {/* <img src={fileUrl} alt="" /> */}
          <input
            type="file"
            className="form__file"
            onChange={(e) => setImg(e.target.value)}
          />
          <div className="form__forms">
            <input
              type="text"
              placeholder="Flower"
              onChange={(e) => setFlower(e.target.value)}
              value={flower}
            />
            <input
              type="number"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <textarea
              cols="38"
              rows="10"
              placeholder="Enter your text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
            <button onClick={addFlowerList}>Add product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
