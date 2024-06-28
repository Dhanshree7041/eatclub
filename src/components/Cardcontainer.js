import Restaurtantcard from "./Restaurtantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Cardcontainer = () => {
  const [count,setCount] = useState(0)
  const [restaurantData,setRestaurantData] = useState([]);
  const [loading,setLoding]=useState(true)
  const [restaturantCollection,setRestaurantCollection]=useState("");
  const [searchtext,setSearchtext] = useState("");
  console.log("restaurtantlist",restaurantData);

  const handleSearchText=(event)=>{
    console.log("function is called",searchtext)
    setSearchtext(event.target.value)
  }
  const filterData = () => {
    const filteredData = restaturantCollection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
    })
  
    setRestaurantData(filteredData);
  }

  useEffect(()=>{
    const getrestaurants = async()=>{
      const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGx");
      const json = await data.json();
      setLoding(false);
      console.log("json",json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantData(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantCollection(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    getrestaurants();
  },[])

console.log("compoenent is rendered")
 
if(loading){
  return (
    <div className="container d-flex flex-wrap gap-4 mt-4">
    <Shimmer />
    </div>
  )
}
return(
    <div>
      <div className="container search-container ">
        <input type="text" value={searchtext} onChange={handleSearchText}className="custom-input" placeholder="Enter name of restaturant"/>
        <button className="btn-btn-sm btn-light" onClick={filterData}>🔍</button>
      </div>
        <div className="container d-flex flex-wrap gap-4 mt-4">
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
            );
          })}</div>
     </div>
    );
  };

  export default Cardcontainer;