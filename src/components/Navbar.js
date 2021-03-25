import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    console.log(props)
    return ( 
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="left brand-logo">Poke Times</a>
            </div>
            <ul className="right">
                <li><Link to="/">HOME</Link></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default withRouter(Navbar);