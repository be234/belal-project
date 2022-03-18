import Section3projects from "./section3projects";
import tomhanks from "../images/tomhanks1.png";
import audiobuttons from "../images/audiobuttons.png";


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
            <div className="projects-container fish"> <img src={tomhanks}  className="image"/>   <div className="middle"> <div> <h2>Tribute Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle7">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container fish"> <img src="https://media.istockphoto.com/photos/midsection-of-man-playing-a-guitar-black-and-white-picture-id1129490620?b=1&k=20&m=1129490620&s=170667a&w=0&h=ha2Z1MsR6hk17odO9FFrZjVs93Gnnv6XsZcYh3JcjkE="  className="image"/>   <div className="middle"> <div> <h2>Landing Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle8">LEARN MORE</label> </div> </div> </div>
            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1639148604826-8c8afc2aefe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="image"/>   <div className="middle"> <div> <h2>Audio Clips</h2> <p>JavaScript / Bootsrap</p> </div> <div> <label for="all" for="toggle2">LEARN MORE</label> </div> </div> </div>

            <div className="projects-container fish"> <img src="https://media.istockphoto.com/photos/connected-and-caffeinated-picture-id1151170177?b=1&k=20&m=1151170177&s=170667a&w=0&h=_bamc-J5CCI_0e45O21YUeiYlUX0eKrM7ah-7zAkUSs="  className="image"/>   <div className="middle"> <div> <h2>Survey Form</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle9">LEARN MORE</label> </div> </div> </div>
            
            <div className="projects-container fish"> <img src="https://images.unsplash.com/photo-1515255384510-23e8b6a6ca3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"  className="image"/>   <div className="middle"> <div> <h2>Documentational Page</h2> <p>Html / Css</p> </div> <div> <label for="all" for="toggle6">LEARN MORE</label> </div> </div> </div>

            <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cXVvdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="image"/>   <div className="middle"> <div> <h2>Quotes Machine</h2> <p>JavaScript / Bootstrap</p> </div> <div> <label for="all" for="toggle1">LEARN MORE</label> </div> </div> </div>
            {/* <div className="projects-container lion"> <img src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>ChowNow Discover</h2> <p>JavaScript</p> </div> <div> <label for="all" for="toggle3">LEARN MORE</label> </div> </div> </div> */}
                

            
            <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="image"/>   <div className="middle"> <div> <h2>Flexible Gallery</h2> <p>React JS / Scss</p> </div> <div> <label for="all" for="toggle4">LEARN MORE</label> </div> </div> </div>
            {/* <div className="projects-container birds"> <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className="image"/>   <div className="middle"> <div> <h2>Flexible Gallery</h2> <p>React JS / JavaScript</p> </div> <div> <label for="all" for="toggle5">LEARN MORE</label> </div> </div> </div> */}
                

            
           
                
            </div>

            {/* Divs to be showed, related to the images above */}

            <Section3projects />
    </section>
     );
}
 
export default Section3;