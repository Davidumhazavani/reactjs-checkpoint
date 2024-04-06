// import React from 'react'
import "./Card.css";

export const Card = () => {
  return (
    <div className="mainDiv">
      <div className="card-container">
      <img
        src="https://picsum.photos/300/200"
        alt="Card Image"
        className="card-img"
      />
      <h1 className="card-title">Card 1</h1>
      <p className="card-desc">
        This is card 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut, veritatis.
      </p>
    </div>

    <div className="card-container">
      <img
        src="https://picsum.photos/300/200"
        alt="Card Image"
        className="card-img"
      />
      <h1 className="card-title">Card 2</h1>
      <p className="card-desc">
        This is card 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut, veritatis.
      </p>
    </div>

    <div className="card-container">
      <img
        src="https://picsum.photos/300/200"
        alt="Card Image"
        className="card-img"
      />
      <h1 className="card-title">Card 3</h1>
      <p className="card-desc">
        This is card 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut, veritatis.
      </p>
    </div>
    </div>
    

    
  );
};
