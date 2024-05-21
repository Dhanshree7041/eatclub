import Carousel from "./Carousel.js"
import Filter from "./Filter.js"
import Searchbar from "./Searchbar.js"
import Cardcontainer from "./Cardcontainer.js"

const Body=()=>{
  return(
    <>
    <div className="text-center">This is body</div>
    <Carousel/>
    <div className="d-flex justify-content-between">
      <Filter/>
      <Searchbar/>
    </div>
    <Cardcontainer/>
    </>
  )
}
export default Body
