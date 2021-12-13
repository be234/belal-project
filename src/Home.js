import Section1 from './webcomponents/Section1';
import Section2 from './webcomponents/Section2';
import Section3 from './webcomponents/Section3';
import Section4 from './webcomponents/Section4';

const Home = () => {
    return ( 
        <div className="home">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
     );
}
 
export default Home;