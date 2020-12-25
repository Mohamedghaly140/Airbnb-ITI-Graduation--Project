import React, { useEffect, useState } from "react";
import Footer from "../../Pages/Footer/Footer";
import HostHeader from "../BecomHost/HostHeader/HostHeader";

const AddonFive = () => {
  //Navigate to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <div className="h-100 w-100 mainDiv">
        <div className="bg-dark text-light container-fluid p-3 pb ">
          {/* logo */}
          <div className=" w-50 h-50 p-3">
            <a href="./INDEX.HTML" className="imgLogo ">
              <svg
                viewBox="0 0 1000 1000"
                role="img"
                aria-hidden="false"
                aria-label="Home"
                focusable="false"
                style={{
                  height: "1em",
                  width: "1em",
                  display: "block",
                  fill: "white",
                }}
              >
                <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
              </svg>
            </a>
          </div>
          {/* header */}
          <div className="m-5 pt-5 pl-1">
            <section className="m-2 w-75">
              <h1 className="font-wight-bold text-break m-1">
                Battling discrimination on Airbnb
              </h1>
              <h3 className="subHead font-weight-normal">
                Since 2016, we've removed 1.3M people from Airbnb for declining
                to treat others without judgement or bias. But discrimination
                still happens, so we're introducing some new ways to fight it.
              </h3>
            </section>
          </div>
        </div>
        {/* first block */}
        <div className="container m-5">
          <section className="pt-5 pr-5 w-60">
            <h2 className="text-dark font-weight-bold text-break firstBlock">
              Project Lighthouse: finding &amp; fighting discrimination on
              Airbnb
            </h2>
            <h3 className="h3 pt-3 mr-5 pFirstBlock text-dark w-75">
              Project Lighthouse is a groundbreaking initiative we're launching
              in the United States to uncover, measure, and overcome
              discrimination when booking or hosting on Airbnb.
            </h3>
          </section>
          <div className="mt-5 row">
            <div className=" col-6 ">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/e8d4bfc4-7a2f-445b-a839-ccc04e9accbb.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/e8d4bfc4-7a2f-445b-a839-ccc04e9accbb.png"
              />
              <section className="mt-3">
                <h3 className="paragrafHeader">
                  Built to uncover discrimination
                </h3>
                <p className="paragraf">
                  This project will address discrimination that's based on
                  perception—and on Airbnb, people perceive race from things
                  like first names and profile photos. Together, with civil
                  rights organizations like Color Of Change and Upturn, we're
                  beginning with research to understand when and where racial
                  discrimination happens on our platform and the effectiveness
                  of policies that fight it.
                  <a href="#" className="bodyLinks">
                    Learn more
                  </a>
                </p>
              </section>
            </div>
            <div className="col-6">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/e802cc02-edcf-48ec-a3b0-4a7b1993e36c.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/e802cc02-edcf-48ec-a3b0-4a7b1993e36c.png"
              />
              <section className="mt-3">
                <h3 className="paragrafHeader">
                  Designed with privacy in mind
                </h3>
                <p className="paragraf">
                  We worked with leading privacy organizations like the Center
                  for Democracy &amp; Technology to understand the best methods
                  for privacy protection so we can make sure your information
                  stays safe. We analyze trends in bulk, and Airbnb won't
                  associate perceived race information with specific accounts.
                  <a href="#" className="bodyLinks">
                    Learn more
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
        <hr className="my-5" width="90%" />
        {/* second block */}
        <div className="container m-5">
          <section className="pt-5 pr-5 w-60">
            <h2 className="text-dark font-weight-bold text-break firstBlock">
              What we’ve done so far
            </h2>
            <h3 className="h3 pt-3 mr-5 pFirstBlock text-dark">
              We know that addressing discrimination requires ongoing attention
              and care to make sure we get things right. Here are some of the
              other actions we’ve taken—and what you can expect more of in the
              future.
            </h3>
          </section>
          <div className="mt-5 row">
            <div className="col-6">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/c80bdbd5-0da7-45c5-9560-d11d2debebed.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/c80bdbd5-0da7-45c5-9560-d11d2debebed.png"
              />
              <section className="mt-4">
                <h3 className="paragrafHeader">Non-discrimination Policy</h3>
                <p className="paragraf">
                  Everyone who uses Airbnb must agree to our
                  <a href="#" className="bodyLinks">
                    Community Commitment
                  </a>{" "}
                  and
                  <a href="#" className="bodyLinks">
                    Non-discrimination Policy
                  </a>
                  . If you’ve experienced discrimination, we’ll investigate the
                  issue, take action, and if needed,
                  <a href="#" className="bodyLinks">
                    help you
                  </a>{" "}
                  find another place to stay.
                </p>
              </section>
            </div>
            <div className="col-6">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/0f7b485b-fed4-4c36-90cd-b70a6706331f.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/0f7b485b-fed4-4c36-90cd-b70a6706331f.png"
              />
              <section className="mt-4">
                <h3 className="paragrafHeader">Profile photo protections</h3>
                <p className="paragraf">
                  We all have bias. But companies like Airbnb can do more to
                  create tools that help prevent people from making biased
                  decisions. That’s why guests’ profile photos aren’t displayed
                  to hosts until after a booking is confirmed, which encourages
                  more objective decision making by hosts.
                </p>
              </section>
            </div>
            <div className="col-6">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/72ddb682-5676-425b-84c6-dda98f7c3e0a.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/72ddb682-5676-425b-84c6-dda98f7c3e0a.png"
              />
              <section className="mt-4">
                <h3 className="paragrafHeader">Objective bookings</h3>
                <p className="paragraf">
                  Instant Book allows a listing to be booked immediately, making
                  the process easier for hosts and ensuring the process is
                  objective for guests. Millions of listings can be booked this
                  way, with more being added all the time.
                </p>
              </section>
            </div>
            <div className="col-6">
              <img
                className="_9ofhsl"
                style={{ objectFit: "contain", verticalAlign: "bottom" }}
                aria-hidden="true"
                alt
                src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/36fe906e-ad96-469b-88d1-a7a1fb128cfd.png"
                data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/36fe906e-ad96-469b-88d1-a7a1fb128cfd.png"
              />
              <section className="mt-4">
                <h3 className="paragrafHeader">
                  Dedicated anti-discrimination team
                </h3>
                <p className="paragraf">
                  Airbnb has a specialized team dedicated to making changes to
                  our platform that help prevent and address discrimination,
                  including development of initiatives like Project Lighthouse
                  and profile photo protections.
                </p>
              </section>
            </div>
          </div>
        </div>
        {/* third block */}
        <div className="container m-5">
          <section className="pt-5 pr-5 w-60">
            <h2 className="text-dark font-weight-bold text-break firstBlock">
              We’re not alone in this
            </h2>
            <h3 className="h3 pt-3 mr-5 pFirstBlock text-dark">
              We’ve consulted and partnered with civil rights and privacy
              organizations to make sure we’re battling discrimination
              thoughtfully and with the support of others engaged in this work.
            </h3>
          </section>
          <div className="mt-5">
            <img
              className="_792k0r1"
              style={{ verticalAlign: "bottom" }}
              aria-hidden="true"
              alt="Logos of partners Airbnb has worked with to fight discrimination. Partners include: Asian Americans Advancing Justice, Center for Democracy & Technology, Color Of Change, The Leadership Conference, League of United Latin American Citizens, NAACP,  National Action Network, and Upturn."
              src="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/689b438f-e798-42b6-a423-15c85d1a8ae5.png"
              data-original-uri="https://a0.muscache.com/pictures/Antidiscrimination/AgainstDiscrimination/original/689b438f-e798-42b6-a423-15c85d1a8ae5.png"
            />
          </div>
        </div>
        {/* fourth block */}
        <div className="bg-dark text-light container-fluid p-3 pb">
          <h1 className="hh  text-break m-5 w-50">
            Ways to get involved beyond our community
          </h1>
          <div className=" m-5 row">
            <div className="mt-3 col-6">
              <h4 className="footerHeader">Donate to the movement</h4>
              <p className="paragrafFooter">
                If you can, consider financially supporting the
                <a href="#" className="footerLinks">
                  NAACP
                </a>{" "}
                and the
                <a href="#" className="footerLinks">
                  Black Lives Matter Global Network Foundation
                </a>
                .
              </p>
            </div>
            <div className="mt-3 col-6">
              <h4 className="footerHeader">Support Color Of Change</h4>
              <p className="paragrafFooter">
                Visit{" "}
                <a href="#" className="footerLinks">
                  ColorOfChange.org
                </a>{" "}
                to join and donate to the movement.
              </p>
            </div>
            <div className="mt-3 col-6">
              <h4 className="footerHeader">Participate in Blackout Day</h4>
              <p className="paragrafFooter">
                On July 7th, only spend money at Black-owned businesses.
              </p>
            </div>
            <div className="mt-3 col-6">
              <h4 className="footerHeader">And more...</h4>
              <p className="paragrafFooter">
                <a href="#" className="footerLinks">
                  Read the antiracism resources
                </a>{" "}
                from our Black employee resource group, Black@Airbnb.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddonFive;
