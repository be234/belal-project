const Footer = () => {
    return ( 
        <section className="footer">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>

          <div className="footer-flex">

                <div className="up"><a href="#"><svg
                          width="45"
                          height="45"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                    <path
                      d="M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z"
                      fill="currentColor"
                    />
                 </svg></a></div>


                    <div class="middle" data-aos="" data-aos-duration="800" data-aos-once="true">

              <a class="btn" href="https://github.com/be234" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              
              <a class="btn" href="#" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
        
              <a class="btn" href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="btn" href="https://codepen.io/Belal-Elgebaly" target="_blank">
                <i class="fab fa-codepen"></i>
              </a>
         </div>

            <p>BELAL ELGEBALY <span style={{"color":"#e31b6d"}}>©2022</span></p>

            </div>

        </section>
     );
}
 
export default Footer;