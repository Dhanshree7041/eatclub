import Restaurtantcard from "./Restaurtantcard.js"
import { restaurantList } from "../const/config.js";
import { useState } from "react";

const Cardcontainer = () => {
  const [restaurantData, setrestaurantData] = useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  const [text,setText]= useState("");
  
  console.log(
    "restaurantList",
    restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // setrestaurantData(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

const filterRestaurants =() =>{
    const restaurants = restaurantData.filter((restaurant)=>{
    return(
      restaurant?.info?.avgRating>=4.5
    )
  })
  setrestaurantData(restaurants);
}
return(
      <div className="container d-flex flex-wrap gap-4">
        <button onClick={filterRestaurants}>Top rated restaurant list</button>
        {restaurantData.map((restaurant)=>{
            return(
              <Restaurtantcard
              key={restaurant?.info?.id}
                // imgUrl={IMG_URL+restaurant?.info?.cloudinaryImageId}
                // title={restaurant?.info?.name}
                // starRating={restaurant?.info?.avgRating}
                // deliveryTime={restaurant?.info?.sla?.deliveryTime}
                // cuisines={restaurant?.info?.cuisines.join(", ")}
                // location={restaurant?.info?.areaName}
                {...restaurant?.info}
              />
            )
          })
        }
      </div>
    );
  };

  export default Cardcontainer;