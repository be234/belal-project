const Section1 = () => {
    return ( 
        <section className="section1" id="section1">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>
            <div className="section1-items-container">
                <div id="item1"><p>Hello, I’m <span class="highlight">Belal Elgebaly</span>,<br></br> I’m a front-end web developer</p></div>
                <a id="item2" href="#section2"><a href="#section2"><button onclick="window.location.href='/#section2'">View my work <span id="arrow" class="iconify" data-icon="mdi:arrow-right"></span> </button></a></a>
            </div>
        </section>
     );
}
 
export default Section1;