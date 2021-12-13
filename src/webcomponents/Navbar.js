const Navbar = () => {
    return ( 
        <nav className="navbar">
        <input type="checkbox" name="" id="check" />
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
      <ul>
          <li><a href="/">HOME</a></li>
          <li><a herf="#">ABOUT</a></li>
          <li><a href="/sessions">PORTFOLIO</a></li>
          <li><a href="/gettoknowus">CONTACT</a></li>
      </ul>
        </nav>
    );
}
 
 
export default Navbar;