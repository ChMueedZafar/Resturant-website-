import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";
import React from 'react'

export const ItemCard = ({imgSrc, name, ratings, price}) => {
  return (
    <div className="itemCard">
        <div className="isfavourite">
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
