const Section4 = () => {
    return ( 
        <section className="section4">
              <div className="flex-container">
                <div id="item1"></div>
                <div id="item2"></div>
              </div>
            <h1>CONTACT</h1>
            <p>Have a question or want to work together?</p>
            <form action="" className="contact-form">

               <input type="text" id="name" name="name" placeholder="Name" required />
               <input type="email" id="email" placeholder="Enter email" required />
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
        </section>
     );
}
 
export default Section4;