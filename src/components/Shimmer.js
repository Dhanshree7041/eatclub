import React from "react"; 

const Shimmer = ()=>{
    return(
        <div className="custom-card zoom">
      <div className="mb-3">
        <div className="shimmer-img"></div>
      </div>
      <div>
      <h5 className="shimmerLine mb-3"></h5>
      <div className="d-flex mb-3 justify-content-between">
            <div className="shimmerLine" style={{width:"50px"}}></div>
            <div className="shimmerLine" style={{width:"50px"}}></div>
      </div>
      <div className="text-secondary shimmerLine mb-3"></div>
      <div className="shimmerLine mb-3"></div>
      </div>
    </div>
    )
}
export default Shimmer;