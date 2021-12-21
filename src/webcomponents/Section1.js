const Section1 = () => {
    return ( 
        <section className="section1">
            <div className="section1-items-container">
                <div id="item1"><p>Hello, I’m <span>Belal Elgebaly</span>,<br></br> I’m a front-end web developer</p></div>
                <div id="item2"><form action="#section2"><button onclick="window.location.href='/#section2'">View my work</button></form></div>
            </div>
        </section>
     );
}
 
export default Section1;