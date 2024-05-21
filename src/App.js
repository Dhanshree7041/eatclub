import logo from './logo.svg';
import './App.css';
import Logo from "./assets/images/K7uvUkhm_200x200-removebg-preview.png"

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// const Header= ()=>{
//   return(
//     <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       <img src={Logo} style={{width:"60px"}}/>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">About Us</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Cart</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact Us</a>
//         </li>    
//       </ul>
//     </div>
//   </div>
// </nav>
//   )  
// }

// const Carousel= () =>{
//   return(
//     <div className="text-center">This is Carousel </div>
//   )
// }

// const Filters=()=>{
//   return(
//     <div>This is filter</div>
//   )
// }

// const Searchbar=()=>{
//   return(
//     <div>This is search bar</div>
//   )
// }

// const Restaurtantcard=()=>{
//   return(
//     <div className="text-center">This is Restaurtantcard</div>
//   )
// }

// const Cardcontainer=()=>{
//   return(
//     <>
//     <p className="text-center">This is Cardcontainer component</p>
//     <Restaurtantcard/>
//     <Restaurtantcard/>
//     <Restaurtantcard/>
//     <Restaurtantcard/>
//     <Restaurtantcard/>
//     <Restaurtantcard/>
//     </>
//   )
// }

// const Body=()=>{
//   return(
//     <>
//     <div className="text-center">This is body</div>
//     <Carousel/>
//     <div className="d-flex justify-content-between">
//       <Filters/>
//       <Searchbar/>
//     </div>
//     <Cardcontainer/>
//     </>
//   )
// }

// const Footer=()=>{
//   return(
//     <div className="text-center bg-primary">This is footer </div>
//   )
// }

const App = () =>{
  return (
    <>
   <Header/>
   <Body/>
   <Footer/>
   </>
  );
}

export default App;
