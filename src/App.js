import './App.css';
import Home from './Home';

function App() {

window.onscroll = function() {myFunction()};
  
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  return (
    <div className="App">
      <Home />
    </div>
  );

}

export default App;
