import Marquee from "react-fast-marquee";
import googLogo from "../../assets/company Logo/google.svg"
import airBnbLogo from "../../assets/company Logo/airbnb.svg"
import dropboxLogo from "../../assets/company Logo/dropbox.svg"
import fedexLogo from "../../assets/company Logo/fedex.svg"
import hubspotLogo from "../../assets/company Logo/hubspot.svg"
import wallmartLogo from "../../assets/company Logo/wallmart.svg"

const CompanyLogos = () => {
    return (
        <div>
            <div className="pb-6 w-11/12 mx-auto">
            <Marquee.default
                speed={50}
                gradient={true}
                gradientWidth={600}
            >
                
                <img className="mx-10" src={googLogo} alt="" />
                <img className="mx-10" src={airBnbLogo} alt="" />
                <img className="mx-10" src={dropboxLogo} alt="" />
                <img className="mx-10" src={fedexLogo} alt="" />
                <img className="mx-10" src={hubspotLogo} alt="" />
                <img className="mx-10" src={wallmartLogo} alt="" />

                <img className="mx-10" src={googLogo} alt="" />
                <img className="mx-10" src={airBnbLogo} alt="" />
                <img className="mx-10" src={dropboxLogo} alt="" />
                <img className="mx-10" src={fedexLogo} alt="" />
                <img className="mx-10" src={hubspotLogo} alt="" />
                <img className="mx-10" src={wallmartLogo} alt="" />
                
            </Marquee.default>
        </div>
        </div>
    );
};

export default CompanyLogos;