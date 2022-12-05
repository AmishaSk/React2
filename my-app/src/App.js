import React, { useContext, useState, useMemo } from "react";
import './App.css';
function App() {
  const a = [
    {
      img: "images/Food.jpg",
      category: "Food",
    },
    {
      img: "images/Wonders.jpg",
      category: "Wonders",
    },
    {
      img: "images/Birds.jpg",
      category: "Birds",
    },
    {
      img: "images/Places.jpg",
      category: "Places",
    },
  ];
  const b=[
    {
      img:"images/Welcome.jpg",
      category:"Welcome_Page",
    },
  ];
  const [selectCategory, setSelectCategory] = useState("");
  function handleCategoryChange(event) {
    setSelectCategory(event.target.value);
  }
  function getFilteredList() {
    if (!selectCategory) {
      return b;
    }
    return a.filter((item) => item.category === selectCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectCategory, a]);
  return (
    <>
      <div className="container">
        <h1>Categories - Search</h1>
        <div className="input-group" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search the item you want.."
            aria-label="Search"
            onChange={(event) => setSelectCategory(event.target.value)} />
        </div>
        <div className="albutn">
          <button
            type="button"
            className="btn"
            value="Food"
            onClick={handleCategoryChange}
          >
            Food
          </button>
          <button
            type="button"
            className="btn"
            value="Wonders"
            onClick={handleCategoryChange}
          >
            Wonders
          </button>
          <button
            type="button"
            className="btn"
            value="Birds"
            onClick={handleCategoryChange}
          >
            Birds
          </button>
          <button
            type="button"
            className="btn"
            value="Places"
            onClick={handleCategoryChange}
          >
            Places
          </button>
        </div>
      </div>
      <div className="container mt-4">
        {filteredList.length === 0 ? (
          <div className="display">No Result Found!</div>
        ) : (
          <div></div>
        )}
        <div className="row">
          {filteredList.map((item, key) => (
            <div className="col" key={key}>
              <img src={item.img} alt={item.category} height="250" width="250" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;