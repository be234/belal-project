
const Navbar = () => {
    return ( 
        <nav className="navbar" id="navbar">
        <input type="checkbox" name="" id="check" />
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
      <ul  id="section2">
          <li><a href="#section1">HOME</a></li>
          <li><a href="#section22">ABOUT</a></li>
          <li><a href="#section3">PORTFOLIO</a></li>
          <li><a href="#section4">CONTACT</a></li>
      </ul>
        </nav>
    );
}
 
export default Navbar;