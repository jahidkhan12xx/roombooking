import Banner from "../../components/Banner/Banner";
import FeaturedRoom from "../../components/FeaturedRoom/FeaturedRoom";
import { Parallax } from 'react-parallax';
import img2 from '../../../public/15.jpg'
import img3 from '../../../public/6.jpg'
import img4 from '../../../public/17.jpg'
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Testimonials from "../../components/UserTestimonials/Testimonials";
import NewsLetter from "../../components/NewsLetter/NewsLetter";



const Home = () => {
    
    return (
        <div>
            <Helmet>
        <title>Royal Taj - Home</title>
        <meta name="description" content="Default description for your pages" />
       
      </Helmet>
            
            <Banner></Banner>
    
    <Parallax blur={10} bgImage={img2} bgImageAlt="the cat" strength={800}>
    <FeaturedRoom></FeaturedRoom>
    </Parallax>
    <Parallax blur={0} bgImage={img3} bgImageAlt="the cat" strength={800}>
    <Testimonials></Testimonials>
    </Parallax>
    <Parallax blur={10} bgImage={img4} bgImageAlt="the cat" strength={800}>
    <NewsLetter></NewsLetter>
    </Parallax>


    
    
    
            
            
            
            
        </div>
    );
};

export default Home;