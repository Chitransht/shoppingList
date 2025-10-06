import React from "react";

const Cards = ({item}) => {
    console.log("item", item);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          width: "250px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
        }}
      >
        <h3>{item.title}</h3>
        <img src={item.thumbnail} alt={item.title} style={{ width: "100%" }} />
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
    </>
  );
};

export default Cards;
