const Section4 = () => {
    return ( 
        <section className="section4" id="section4">
              <div className="flex-container">
                <div id="item1"></div>
                <div id="item2"></div>
              </div>
            <h1 className="underline-small-c"  data-aos="fade-up" data-aos-duration="800" data-aos-once="true">CONTACT</h1>
            <p  data-aos="fade-up" data-aos-duration="800" data-aos-once="true">Have a question or want to work together?</p>

     <div data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <form action="https://formsubmit.co/belalelgebaly20000@gmail.com" method="POST" className="contact-form">
              <input type="hidden" name="_captcha" value="false" />
               <input type="text" id="name" name="name" placeholder="Name" required />
               <input type="email" name="email" id="email" placeholder="Enter email" required />
               <input type="hidden" name="_next" value="https://be234.github.io/belal-project/" />
               <textarea
                  id="commenting"
                  className="textArea"
                  name="comments" 
                  placeholder="Your message"
                  ></textarea>
                  <div className="buttondiv">
                  <button type="submit" id="submit">SUBMIT</button> 
                  </div>

            </form>
            </div>
        </section>
     );
}
 
export default Section4;