import React,{useState} from "react";
import Footer from "../../Pages/Footer/Footer"
import HostHeader from "../BecomHost/HostHeader/HostHeader"




const AddonTwo = ()=>{
    const [navbar, setNavbar] = useState(false);
    return (
      <>
      <HostHeader navbar={navbar} setNavbar={setNavbar}/>
        <div id="AddonTwo">
            <div className="container">
                 <div className="sectionone row py-5">
                    <div className="col">
                        <img src="1.PNG" alt="" className="img-fluid" srcset=""/>
                    </div>
                    <div className="col">
                        <span className="text-muted">December 15, 2020</span>
                        <h3>This New Year’s Eve, Sleep Under the Times Square Ball with Airbnb + Nasdaq</h3>
                        <p>Airbnb and Nasdaq are coming together to host a magical stay under New Year’s Eve ball in Times Square to close out 2020, hosted by Mariah Carey.</p>
                    </div>
                    </div>
                    <div className="sectiontow py-5">
                       <div className="row">
                        <div className="col-md-4 text-center mb-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img className="img-fluid" src="2.PNG" alt="" srcset=""/>
                                </div>
                                <div className="card-title">
                                <h5 className="">Airbnb Delivers $2.6 Billion in Taxes to Governments Around the World</h5>
                                </div>
                                <div className="card-body">
                                <p>Airbnb is committed to helping our community pay its fair share of taxes. We are collecting and remitting taxes in more than 650 jurisdictions, covering thousands of cities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img className="img-fluid" src="3.PNG" alt="" srcset=""/>
                                </div>
                                <div className="card-title">
                                <h5 className="">Ron Conway and the Economic Empowerment Award</h5>
                                </div>
                                <div className="card-body">
                                <p>New Year’s Eve will be a bit different from years’ past, that doesn’t mean it can’t be celebrated together. Here are 10 Online Experiences to help groups celebrate the occasion.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-3">
                            <div className="card">
                            <div className="card-img-top">
                            <img className="img-fluid" src="4.PNG" alt="" srcset=""/>
                            </div>
                                <div className="card-title">
                                <h5 className="">10 Ways to Celebrate New Year’s Eve at Home with Online Experiences</h5>
                                </div>
                                <div className="card-body">
                                <p>A message from Airbnb Co-Founder and CEO Brian Chesky.</p>
                                </div>
                            </div>
                        </div>
                       </div> 
                    </div>    
                </div>
        </div>
        <Footer/>
        </>
    )

}

export default AddonTwo;