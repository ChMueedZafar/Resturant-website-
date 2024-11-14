import React from "react";
import { useState } from "react";
import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";

export const ItemCard = ({imgSrc, name, ratings, price}) => {
    const [isFavourite, setFavourite] = useState(false);

  return (
    <div className="itemCard">
        <div className={`isFavourite ${isFavourite ? "active" : ""}`}
            onClick={() => setFavourite(!isFavourite)}>
            <Favorite />
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt="first img" className="itemimg" />
        </div>
          <div className="itemContent">
            <h3 className="itemName">{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null ,{length: 5}).map((e, i) => (
                        <i key={i}>
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
