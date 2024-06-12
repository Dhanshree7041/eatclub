import { IMG_URL } from "../const/config.js";
const Restaurtantcard=({cloudinaryImageId, name, avgRating, sla, cuisines, areaName})=>{
    return(
      <div className="custom-card zoom">
      <div className="mb-2">
        <img 
       src={IMG_URL+cloudinaryImageId}
      />
      </div>
      <div className="px-2">
      <h5>{name}</h5>
      <div className="d-flex justify-content-between">
      <div>⭐{avgRating}</div>
        <div>{sla.deliverytTime}min</div>
      </div>
      <div className="text-secondary">{cuisines.join(", ")}</div>
      <div>{areaName}</div>
      </div>
    </div>
    )
  }
 export default Restaurtantcard;