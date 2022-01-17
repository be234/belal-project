const Section3 = () => {
    return ( 
        <section className="section3">
            <div><h1 className="underline-small">PROJECTS</h1></div>

            <input type="radio" id="all" name="button" defaultChecked/>
            <input type="radio" id="fish" name="button" />
            <input type="radio" id="birds" name="button" />
            <input type="radio" id="lion" name="button" />
            <input type="radio" id="toggle1" name="toggle" />
            
            <label className="tag all" for="all">ALL</label>
            <label className="tag tag1" for="fish">HTML/CSS</label>
            <label className="tag tag2" for="birds">REACT-JS</label>
            <label className="tag tag3" for="lion">JAVASCRIPT</label>
            <br/>

            <div className="images">
            {/* style={{"opacity":"0"}, {"position": "fixed"}} */}
            <div className="projects-container lion"> <img src="https://media.istockphoto.com/photos/coding-software-concept-developer-working-on-code-picture-id1284552053?k=20&m=1284552053&s=612x612&w=0&h=ri2L0d1uKo334hpVXpzQ45x67QALCb0GvFIkYWVqT78="  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>JavaScript</p> </div> <div> <button> <label for="all" for="toggle1">Learn more</label></button> </div> </div> </div>
            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
                

            
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>React JS / JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>React JS / JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>React JS / JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>React JS / JavaScript</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
                

            
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>Html / Css</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>Html / Css</p> </div> <div> <button>LEARN MORE</button> </div> </div> </div>
                
            </div>

            {/* Divs to be showed, related to the images above */}
            
        <span id="content1">
          <div class="showed-div">
            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="project image" />
            <h1>WalkerTracker</h1>
            <h5>PERFORMANCE METRICS.</h5>
            <p>Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.</p>
            <input type="radio" id="toggle2" name="toggle" />
            <label for="toggle2">close</label>

          </div>
          </span>
        <span id="content2"></span>
    </section>
     );
}
 
export default Section3;