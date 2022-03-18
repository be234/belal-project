import tributeimage from "../images/tributepageimg1.png";
import quotesimg from "../images/qoutesimg1.png";
import audioimg from "../images/audioimg1.png";
import docimg from "../images/documentationalimg1.png";
import landingimg from "../images/landingimg1.png";
import surveyimg from "../images/surveyimg.png";
import galleryimg from "../images/galleryimg1.png";

const Section3projects = () => {
    return ( 
        <div className="section3projects">
                     
{/* radio buttons */}
            <input type="radio" id="toggle1" name="toggle" />
            <input type="radio" id="toggle2" name="toggle" />
            <input type="radio" id="toggle3" name="toggle" />
            <input type="radio" id="toggle4" name="toggle" />
            <input type="radio" id="toggle5" name="toggle" />
            <input type="radio" id="toggle6" name="toggle" />
            <input type="radio" id="toggle7" name="toggle" />
            <input type="radio" id="toggle8" name="toggle" />
            <input type="radio" id="toggle9" name="toggle" />

{/* tab 1 */}
        <span id="content1">
          <div class="showed-div">
            <img src={quotesimg} alt="project image" />
            <h1>Quotes Machine</h1>
            <h5>FAMOUS QUOTES FROM GAME OF THRONES.</h5>
            <hr />
            <p>This Quotes Machine/Generator runs on JavaScript and generates random quotes of the famous series game of thrones.</p>
            <a href="https://be234.github.io/quotes-machine/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            <input type="radio" id="toggle0" name="toggle" />

          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

{/* tab 2 */}
          <span id="content2">
          <div class="showed-div">
            <img src={audioimg} alt="project image" />
            <h1>Audio Clips</h1>
            <h5>FAMOUS MOVIES AUDIO CLIPS.</h5>
            <hr />
            <p>A simple page with audio buttons and each button plays an audio clip of movies you surely have watched.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/Audio-buttons/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span className="iconify close-iconify" data-icon="mdi:close"></span></label>

          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 3 */}
<span id="content3">
          <div class="showed-div">
            <img src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="project image" />
            <h1>WalkerTracker</h1>
            <h5>PERFORMANCE METRICS.</h5>
            <hr />
            <p>Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="google.com" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 4 */}
<span id="content4">
          <div class="showed-div">
            <img src={galleryimg} alt="project image" />
            <h1>Flexible Gallery</h1>
            <h5>GEBALY Gallery.</h5>
            <hr />
            <p>A gallery built with react, scss and other features, it's responsive to all devices, it has various sections containing pictures from nature to sports.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/photography-project/#/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>


          
{/* tab 5 */}
<span id="content5">
          <div class="showed-div">
            <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="project image" />
            <h1>WalkerTracker</h1>
            <h5>PERFORMANCE METRICS.</h5>
            <hr />
            <p>Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="google.com" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 6 */}
<span id="content6">
          <div class="showed-div">
            <img src={docimg} alt="project image" />
            <h1>Documentationl Page</h1>
            <h5>GAME OF THRONES CHARACTERS.</h5>
            <hr />
            <p>This documentational site contains information regarding the famous series Game Of Thrones Characters, and an overview of each main character.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/Documentation-page/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 7 */}
<span id="content7">
          <div class="showed-div">
            <img src={tributeimage} alt="project image" />
            <h1>Tribute Page</h1>
            <h5>OVERVIEW OF TOM HANKS.</h5>
            <hr />
            <p>This Tribute page contains some of the greatest movies Tom Hanks has performed, also about an introduction of this career, as he was one of the most successful actors in this century!</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/tribute-page/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 8 */}
<span id="content8">
          <div class="showed-div">
            <img src={landingimg} alt="project image" />
            <h1>Landing Page</h1>
            <h5>GUITAR LANDING PAGE.</h5>
            <hr />
            <p>A simple landing page layout for selling guitars. It's responsive to all devices and pretty simple.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/Guitar-landing-page/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

          
{/* tab 9 */}
<span id="content9">
          <div class="showed-div">
            <img src={surveyimg} alt="project image" />
            <h1>Survey Form</h1>
            <h5>A SPOTIFY SURVEY FORM.</h5>
            <hr />
            <p>Spotify Survey Form designed to get users experiece about the app, it inlcudes radio buttons, checkboxes, textarea and more.</p>
            <input type="radio" id="toggle0" name="toggle" />
            <a href="https://be234.github.io/fake-spotify-survey-form/" target="_blank" className="view-site-button"><div><span class="iconify" data-icon="mdi:open-in-new"></span></div> <span>VIEW SITE</span></a>
            <label for="toggle0"><span class="iconify" data-icon="mdi:close"></span></label>
            
          </div>
          <label for="toggle0" id="close-tabs"></label>
          <span id="content0"></span>
          </span>

        </div>
     );
}
 
export default Section3projects;