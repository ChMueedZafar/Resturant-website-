import React from "react";
import { useState } from "react";
import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";

export const ItemCard = ({imgSrc, name, ratings, price, itemId}) => {
    
    const [isFavourite, setFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
const handleClick = (value) => {
    setCurrentValue(value); 
};


  return (
    <div className="itemCard" id={itemId}>
        <div className={`isFavourite ${isFavourite ? "active" : ""}`}
            onClick={() => setFavourite(!isFavourite)}>
            <Favorite />
        </div>
        <div className="imgBox">
            <img src={imgSrc}  alt="first img" className="itemimg" />
        </div>
          <div className="itemContent">
            <h3 className="itemName">{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null ,{length: 5}).map((e, i) => (
                        <i key={i} className={`rating ${currentValue > i ? "orange" : "gray" } `} onClick={() => handleClick (i + 1)}>
                             <StarRounded/>  
                        </i>
                    ))}
                    <h3 className="price">
                        <span>$</span>
                        {price}
                    </h3>
                </div>
                <i className="addtoCart">
                    <AddRounded/>
                </i>
            </div>
          </div>
    </div>

  )
}
