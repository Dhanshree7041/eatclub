import Logo from "../assets/images/swiggy.png"

const Header = ()=>{
    return(
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
		<div className="container">
    <img src={Logo} style={{width:"60px"}}/>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
			      	<span className="navbar-toggler-icon"></span>
			    </button>
			<div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
			    <ul className="navbar-nav">
			    	<li className="nav-item">
			         	<a className="nav-link" href="#">Swiggy Corporate</a>
			        </li>
			        <li className="nav-item">
			         	<a className="nav-link" href="#">Search</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Offers</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Help</a>
			        </li> 
              <li className="nav-item">
			          	<a className="nav-link" href="#">Cart</a>
			        </li> 
			        <button type="button" className="btn btn-primary">Sign In⬆</button>
			    </ul>
			</div>
		</div>
	</nav>
    )  
  }
export default Header
