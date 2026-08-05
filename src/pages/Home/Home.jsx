import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import Category from './Category';
import Choose from './Choose';
import Cta from './Cta';
import NewsLatter from './NewsLatter';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CompanyLogos></CompanyLogos>
            <Category></Category>
            <Choose></Choose>
            <Cta></Cta>
            <Faq></Faq>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;