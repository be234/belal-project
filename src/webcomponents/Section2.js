const Section2 = () => {
    return ( 
        <section className="section2">
            <h1 className="underline-small-a"  data-aos="fade-right" data-aos-duration="800" data-aos-once="true">ABOUT</h1>
            <div className="flex-container">
                <div className="flex-qualities">
                    <div className="qualities-sub-container"  style={{"margin-bottom": "30px"}}>
                    <div className="quality"  data-aos="flip-right" data-aos-duration="800" data-aos-once="true">
                        <img src="https://cdn.shopify.com/s/files/1/2009/8293/products/HG200.jpg?v=1575932424" alt="quality img" />
                        <span class="iconify" data-icon="mdi mdi-speedometer"></span>
                        <h3>Responsive</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing. </p>
                    </div>
                    <div className="quality"  data-aos="flip-right" data-aos-duration="800" data-aos-once="true">
                        <img src="https://cdn.shopify.com/s/files/1/2009/8293/products/HG200.jpg?v=1575932424" alt="quality img" />
                        <h3>Responsive</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing. </p>
                    </div>
                    </div>
                    <div className="qualities-sub-container">
                    <div className="quality"  data-aos="flip-right" data-aos-duration="800" data-aos-once="true">
                        <img src="https://cdn.shopify.com/s/files/1/2009/8293/products/HG200.jpg?v=1575932424" alt="quality img" />
                        <h3>Responsive</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing. </p>
                    </div>
                    <div className="quality"  data-aos="flip-right" data-aos-duration="800" data-aos-once="true">
                        <img src="https://cdn.shopify.com/s/files/1/2009/8293/products/HG200.jpg?v=1575932424" alt="quality img" />
                        <h3>Responsive</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing. </p>
                    </div>
                    </div>
                </div>
                <div className="flex-overview">

                    <div className="img-and-text" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                    {/* <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/271848976_476663260535077_8001872186592145722_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6ikYozAbCO0AX_JDhrq&_nc_ht=scontent.fcai19-6.fna&oh=03_AVJE5B3p_Axp5Fn1jNufxuVlgMovdWmp6OciTnD0-hPzVQ&oe=6214BFB3" alt="an image" /> */}
                        <img src="https://www.mandarinstone.com/app/uploads/2020/04/Oska-Navy-Matt-Porcelain-Hexagon-Swatch-Oct-2020.jpg" alt="an image" />
                        <h3>Who's this guy?</h3>
                        <p>I'm a freelance front end developer in Cairo, Egypt.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
                    </div>

                    <div className="flex-skills"  data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                        <div class="progress-bar-container">
                        
                        <div class="progress-bar">
                            <div class="item1"><h2>HTML</h2></div>
                              <span class="percentage" style={{"width":"68%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>90%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>CSS</h2></div>
                              <span class="percentage" style={{"width":"68%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>90%</h2></div>
                        </div>
                        
                        <div class="progress-bar">
                            <div class="item1"><h2>React</h2></div>
                              <span class="percentage" style={{"width":"56%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>80%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>JavaScript</h2></div>
                              <span class="percentage" style={{"width":"56%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>80%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>Media Query</h2></div>
                              <span class="percentage"  style={{"width":"59.8%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>85%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>Git</h2></div>
                              <span class="percentage" style={{"width":"53%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>75%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>figma</h2></div>
                              <span class="percentage" style={{"width":"59.8%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>85%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>Photoshop</h2></div>
                              <span class="percentage" style={{"width":"46%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>65%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>SASS</h2></div>
                              <span class="percentage" style={{"width":"42%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>60%</h2></div>
                        </div>

                        <div class="progress-bar">
                            <div class="item1"><h2>TypeScript</h2></div>
                              <span class="percentage" style={{"width":"36%"}} data-aos="fade-right" data-aos-duration="800" data-aos-once="true"></span>
                             <div class="item2"><h2>50%</h2></div>
                        </div>
                        </div> 
                     </div>
                    </div>
                </div>

        </section>
     );
}
 
export default Section2;