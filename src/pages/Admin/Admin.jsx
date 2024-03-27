import React from "react";

const Admin = () => {
  return (
    <div id="container">
      <div className="admin">
        <div className="form">
            <input type="file" className="form__file"/>
          <div className="form__forms">
            <input type="text" placeholder="Flower" />
            <input type="number" placeholder="price" />
            <input type="text" placeholder="Category" />
            <textarea cols="40" rows="10" placeholder="Enter your text"></textarea>
            <button>Add product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
