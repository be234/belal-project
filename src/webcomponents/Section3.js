import Section3projects from "./section3projects";
import img33 from "../images/intuitive1.png";

const Section3 = () => {
    return ( 
        <section className="section3">
                        <div id="section3"></div>

            <div><h1 className="underline-small"  data-aos="fade-left" data-aos-duration="800" data-aos-once="true">PROJECTS</h1></div>
            <input type="radio" id="all" name="button" defaultChecked/>
            <input type="radio" id="fish" name="button" />
            <input type="radio" id="birds" name="button" />
            <input type="radio" id="lion" name="button" />


            <label className="tag all" for="all">ALL</label>
            <label className="tag tag1" for="fish">HTML/CSS</label>
            <label className="tag tag2" for="birds">REACT-JS</label>
            <label className="tag tag3" for="lion">JAVASCRIPT</label>
            <br/>

            <div className="images"  data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            {/* style={{"opacity":"0"}, {"position": "fixed"}} */}
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"  className="image"/>   <div className="middle"> <div> <h2>Documentational Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle6">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"  className="image"/>   <div className="middle"> <div> <h2>Tribute Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle7">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"  className="image"/>   <div className="middle"> <div> <h2>Landing Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle8">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>Survey Form</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle9">LEARN MORE</label> </div> </div> </div>

            <div className="projects-container lion"> <img src="https://media.istockphoto.com/photos/coding-software-concept-developer-working-on-code-picture-id1284552053?k=20&m=1284552053&s=612x612&w=0&h=ri2L0d1uKo334hpVXpzQ45x67QALCb0GvFIkYWVqT78=" alt="" className="image"/>   <div className="middle"> <div> <h2>Quotes Machine</h2> <p>JavaScript</p> </div> <div> <label for="all" for="toggle1">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="image"/>   <div className="middle"> <div> <h2>Audio Buttons</h2> <p>JavaScript</p> </div> <div> <label for="all" for="toggle2">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>JavaScript</p> </div> <div> <label for="all" for="toggle3">LEARN MORE</label> </div> </div> </div>
                

            
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>Flexible Gallery</h2> <p>React JS / JavaScript</p> </div> <div> <label for="all" for="toggle4">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>Flexible Gallery</h2> <p>React JS / JavaScript</p> </div> <div> <label for="all" for="toggle5">LEARN MORE</label> </div> </div> </div>
                

            
           
                
            </div>

            {/* Divs to be showed, related to the images above */}

            <Section3projects />
    </section>
     );
}
 
export default Section3;