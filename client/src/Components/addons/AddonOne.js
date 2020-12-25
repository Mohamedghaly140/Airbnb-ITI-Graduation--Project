import React, { useEffect, useState } from "react";
import Footer from "../../Pages/Footer/Footer";
import HostHeader from "../BecomHost/HostHeader/HostHeader";

var AddonOne = () => {
  //Navigate to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <div className="global-container container">
        <div className="global-content">
          <div className="container-nav">
            <h1 className="kb-title">Airbnb Terms of Use</h1>
            <div className="pane-wrapper">
              <div className="left-pane">
                <section
                  dir="LTR"
                  className="kb-article kb-article-variant gradient"
                  data-countries=",PS,PW,PY,QA,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,RE,AW,AZ,BA,BB,RS,BD,RU,BF,RW,BH,BI,BJ,BL,BM,BN,BO,SA,BQ,SB,SC,BS,SD,BT,BV,SH,BW,SJ,BY,BZ,SL,SN,SO,CA,SR,CC,SS,ST,CD,SV,CF,CG,SX,SY,CI,SZ,CK,CL,CM,CN,CO,TC,CR,TD,CU,TF,TG,CV,CW,TH,CX,TJ,TK,TL,TM,TN,TO,TR,TT,TV,TW,TZ,DJ,DM,DO,UA,UG,DZ,EC,EG,EH,UY,UZ,VC,ER,VE,ET,VG,VN,VU,FJ,FK,FM,FO,WF,GA,WS,GD,GE,GF,GH,GL,GM,GN,GP,GQ,GS,GT,GU,GW,GY,HK,HM,HN,HT,YE,ID,YT,IL,IO,ZA,IQ,IR,ZM,ZW,JM,JO,KE,KG,KH,KI,KM,KN,KP,KW,KY,KZ,LA,LB,LC,LK,LR,LS,LY,MA,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MU,MV,MW,MY,MZ,NA,NC,NE,NF,NG,NI,NP,NR,NU,OM,PA,PE,PF,PG,PH,PK,PM,PN,"
                >
                  <div className="page-block">
                    <div className="c-wrapper">
                      <div>
                        <p>
                          Airbnb provides a personalized subscription service
                          that allows our members to access movies and shows
                          (“Airbnb content”) streamed over the Internet to
                          certain Internet-connected s, computers and other
                          devices ("Airbnb ready devices").
                        </p>
                        <p>
                          These Terms of Use govern your use of our service. As
                          used in these Terms of Use, "Airbnb service", "our
                          service" or "the service" means the personalized
                          service provided by Airbnb for discovering and
                          watching Airbnb content, including all features and
                          functionalities, recommendations and reviews, the
                          website, and user interfaces, as well as all content
                          and software associated with our service.
                        </p>
                        <ol>
                          <li>
                            <p>
                              <strong>Membership</strong>
                              <br />
                              <br />
                              1.1. Your Airbnb membership will continue until
                              terminated. To use the Airbnb service you must
                              have Internet access and a Airbnb ready device,
                              and provide us with one or more Payment Methods.
                              “Payment Method” means a current, valid, accepted
                              method of payment, as may be updated from time to
                              time, and which may include payment through your
                              account with a third party. Unless you cancel your
                              membership before your billing date, you authorize
                              us to charge the membership fee for the next
                              billing cycle to your Payment Method (see
                              "Cancellation" below).
                              <br />
                              <br />
                              1.2. We may offer a number of membership plans,
                              including special promotional plans or memberships
                              offered by third parties in conjunction with the
                              provision of their own products and services. We
                              are not responsible for the products and services
                              provided by such third parties. Some membership
                              plans may have differing conditions and
                              limitations, which will be disclosed at your
                              sign-up or in other communications made available
                              to you. You can find specific details regarding
                              your Airbnb membership by visiting our website and
                              clicking on the "Account" link available at the
                              top of the pages of the Airbnb website under your
                              profile name.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Free Trials</strong>
                              <br />
                              <br />
                              2.1. Your Airbnb membership may start with a free
                              trial. The duration of the free trial period of
                              your membership will be specified during sign-up
                              and is intended to allow new members and certain
                              former members to try the service.
                              <br />
                              <br />
                              2.2. Free trial eligibility is determined by
                              Airbnb at its sole discretion and we may limit
                              eligibility or duration to prevent free trial
                              abuse. We reserve the right to revoke the free
                              trial and put your account on hold in the event
                              that we determine that you are not eligible.
                              Members of households with an existing or recent
                              Airbnb membership are not eligible. We may use
                              information such as device ID, method of payment
                              or an account email address used with an existing
                              or recent Airbnb membership to determine
                              eligibility. For combinations with other offers,
                              restrictions may apply.
                              <br />
                              <br />
                              2.3. We will charge the membership fee for the
                              next billing cycle to your Payment Method at the
                              end of the free trial period unless you cancel
                              your membership prior to the end of the free trial
                              period. To view the membership price and end date
                              of your free trial period, visit our website and
                              click the "Billing details" link on the "Account"
                              page.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Billing and Cancellation</strong>
                              <br />
                              <br />
                              3.1.{" "}
                              <span className="underline">
                                Billing Cycle.
                              </span>{" "}
                              The membership fee for the Airbnb service and any
                              other charges you may incur in connection with
                              your use of the service, such as taxes and
                              possible transaction fees, will be charged to your
                              Payment Method on the specific billing date
                              indicated on your "Account" page. The length of
                              your billing cycle will depend on the type of
                              subscription that you choose when you sign-up for
                              the service. In some cases your payment date may
                              change, for example if your Payment Method has not
                              successfully settled or if your paid membership
                              began on a day not contained in a given month.
                              Visit our website and click on the "Billing
                              details" link on the "Account" page to see your
                              next payment date. We may authorize your Payment
                              Method in anticipation of membership or
                              service-related charges through various methods,
                              including authorizing it for up to approximately
                              one month of service as soon as you register. In
                              some instances, your available balance or credit
                              limit may be reduced to reflect the authorization
                              during your free trial period.
                              <br />
                              <br />
                              3.2.{" "}
                              <span className="underline">
                                Payment Methods.
                              </span>{" "}
                              To use the Airbnb service you must provide one or
                              more Payment Methods. You authorize us to charge
                              any Payment Method associated to your account in
                              case your primary Payment Method is declined or no
                              longer available to us for payment of your
                              subscription fee. You remain responsible for any
                              uncollected amounts. If a payment is not
                              successfully settled, due to expiration,
                              insufficient funds, or otherwise, and you do not
                              cancel your account, we may suspend your access to
                              the service until we have successfully charged a
                              valid Payment Method. For some Payment Methods,
                              the issuer may charge you certain fees, such as
                              foreign transaction fees or other fees relating to
                              the processing of your Payment Method. Local tax
                              charges may vary depending on the Payment Method
                              used. Check with your Payment Method service
                              provider for details.
                              <br />
                              <br />
                              3.3.{" "}
                              <span className="underline">
                                Updating your Payment Methods.
                              </span>{" "}
                              You can update your Payment Methods by going to
                              the "Account" page. We may also update your
                              Payment Methods using information provided by the
                              payment service providers. Following any update,
                              you authorize us to continue to charge the
                              applicable Payment Method(s).
                              <br />
                              <br />
                              3.4.{" "}
                              <span className="underline">
                                Cancellation.
                              </span>{" "}
                              You can cancel your Airbnb membership at any time,
                              and you will continue to have access to the Airbnb
                              service through the end of your billing period. To
                              the extent permitted by the applicable law,
                              payments are non-refundable and we do not provide
                              refunds or credits for any partial membership
                              periods or unwatched Airbnb content. To cancel, go
                              to the "Account" page and follow the instructions
                              for cancellation. If you cancel your membership,
                              your account will automatically close at the end
                              of your current billing period. To see when your
                              account will close, click "Billing details" on the
                              "Account" page. If you signed up for Airbnb using
                              your account with a third party as a Payment
                              Method and wish to cancel your Airbnb membership,
                              you may need to do so through such third party,
                              for example by visiting your account with the
                              applicable third party and turning off auto-renew,
                              or unsubscribing from the Airbnb service through
                              that third party. You may also find billing
                              information about your Airbnb membership by
                              visiting your account with the applicable third
                              party.
                              <br />
                              <br />
                              3.5.{" "}
                              <span className="underline">
                                Changes to the Price and Subscription Plans.
                              </span>{" "}
                              We may change our subscription plans and the price
                              of our service from time to time; however, any
                              price changes or changes to your subscription
                              plans will apply no earlier than 30 days following
                              notice to you.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Airbnb Service</strong>
                              <br />
                              <br />
                              4.1. You must be 18 years of age, or the age of
                              majority in your province, territory or country,
                              to become a member of the Airbnb service. Minors
                              may only use the service under the supervision of
                              an adult.
                              <br />
                              <br />
                              4.2. The Airbnb service and any content viewed
                              through the service are for your personal and
                              non-commercial use only and may not be shared with
                              individuals beyond your household. During your
                              Airbnb membership we grant you a limited,
                              non-exclusive, non-transferable right to access
                              the Airbnb service and view Airbnb content. Except
                              for the foregoing, no right, title or interest
                              shall be transferred to you. You agree not to use
                              the service for public performances.
                              <br />
                              <br />
                              4.3. You may view the Airbnb content primarily
                              within the country in which you have established
                              your account and only in geographic locations
                              where we offer our service and have licensed such
                              content. The content that may be available to
                              watch will vary by geographic location and will
                              change from time to time. The number of devices on
                              which you may simultaneously watch depends on your
                              chosen subscription plan and is specified on the
                              "Account" page.
                              <br />
                              <br />
                              4.4. The Airbnb service, including the content
                              library, is regularly updated. In addition, we
                              continually test various aspects of our service,
                              including our website, user interfaces,
                              promotional features and availability of Airbnb
                              content. You can turn off tests participation at
                              any time by visiting the "Account" page and
                              changing the "Test participation" settings.
                              <br />
                              <br />
                              4.5. Some Airbnb content is available for
                              temporary download and offline viewing on certain
                              supported devices (“Offline Titles”). Limitations
                              apply, including restrictions on the number of
                              Offline Titles per account, the maximum number of
                              devices that can contain Offline Titles, the time
                              period within which you will need to begin viewing
                              Offline Titles and how long the Offline Titles
                              will remain accessible. Some Offline Titles may
                              not be playable in certain countries and if you go
                              online in a country where you would not be able to
                              stream that Offline Title, the Offline Title will
                              not be playable while you are in that country.
                              <br />
                              <br />
                              4.6. You agree to use the Airbnb service,
                              including all features and functionalities
                              associated therewith, in accordance with all
                              applicable laws, rules and regulations, or other
                              restrictions on use of the service or content
                              therein. You agree not to archive, reproduce,
                              distribute, modify, display, perform, publish,
                              license, create derivative works from, offer for
                              sale, or use (except as explicitly authorized in
                              these Terms of Use) content and information
                              contained on or obtained from or through the
                              Airbnb service. You also agree not to: circumvent,
                              remove, alter, deactivate, degrade or thwart any
                              of the content protections in the Airbnb service;
                              use any robot, spider, scraper or other automated
                              means to access the Airbnb service; decompile,
                              reverse engineer or disassemble any software or
                              other products or processes accessible through the
                              Airbnb service; insert any code or product or
                              manipulate the content of the Airbnb service in
                              any way; or use any data mining, data gathering or
                              extraction method. In addition, you agree not to
                              upload, post, e-mail or otherwise send or transmit
                              any material designed to interrupt, destroy or
                              limit the functionality of any computer software
                              or hardware or telecommunications equipment
                              associated with the Airbnb service, including any
                              software viruses or any other computer code, files
                              or programs. We may terminate or restrict your use
                              of our service if you violate these Terms of Use
                              or are engaged in illegal or fraudulent use of the
                              service.
                              <br />
                              <br />
                              4.7. The quality of the display of the Airbnb
                              content may vary from device to device, and may be
                              affected by a variety of factors, such as your
                              location, the bandwidth available through and/or
                              speed of your Internet connection. HD, Ultra HD
                              and HDR availability is subject to your Internet
                              service and device capabilities. Not all content
                              is available in all formats, such as HD, Ultra HD
                              or HDR and not all subscription plans allow you to
                              receive content in all formats. Default playback
                              settings on cellular networks exclude HD, Ultra HD
                              and HDR content. The minimum connection speed for
                              SD quality is 0.5 Mbps; however, we recommend a
                              faster connection for improved video quality. A
                              download speed of at least 5.0 Mbps per stream is
                              recommended to receive HD content (defined as a
                              resolution of 720p or higher). A download speed of
                              at least 25.0 Mbps per stream is recommended to
                              receive Ultra HD (defined as a resolution of 1080p
                              or higher) and HDR content. You are responsible
                              for all Internet access charges. Please check with
                              your Internet provider for information on possible
                              Internet data usage charges. The time it takes to
                              begin watching Airbnb content will vary based on a
                              number of factors, including your location,
                              available bandwidth at the time, the content you
                              have selected and the configuration of your Airbnb
                              ready device.
                              <br />
                              <br />
                              4.8. Airbnb software is developed by, or for,
                              Airbnb and is designed to enable viewing of Airbnb
                              content through Airbnb ready devices. This
                              software may vary by device and medium, and
                              functionalities and features may also differ
                              between devices. You acknowledge that the use of
                              the service may require third party software that
                              is subject to third party licenses. You agree that
                              you may automatically receive updated versions of
                              the Airbnb and related third-party software.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Passwords and Account Access.</strong> The
                              member who created the Airbnb account and whose
                              Payment Method is charged (the "Account Owner")
                              has access and control over the Airbnb account and
                              the Airbnb ready devices that are used to access
                              our service and is responsible for any activity
                              that occurs through the Airbnb account. To
                              maintain control over the account and to prevent
                              anyone from accessing the account (which would
                              include information on viewing history for the
                              account), the Account Owner should maintain
                              control over the Airbnb ready devices that are
                              used to access the service and not reveal the
                              password or details of the Payment Method
                              associated with the account to anyone. You are
                              responsible for updating and maintaining the
                              accuracy of the information you provide to us
                              relating to your account. We can terminate your
                              account or place your account on hold in order to
                              protect you, Airbnb or our partners from identity
                              theft or other fraudulent activity.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>
                                Warranties and Limitations on Liability.
                              </strong>{" "}
                              The Airbnb service is provided "as is" and without
                              warranty or condition. In particular, our service
                              may not be uninterrupted or error-free. You waive
                              all special, indirect and consequential damages
                              against us. These terms will not limit any
                              non-waivable warranties or consumer protection
                              rights that you may be entitled to under the laws
                              of your country of residence.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Class Action Waiver.</strong> WHERE
                              PERMITTED UNDER THE APPLICABLE LAW, YOU AND Airbnb
                              AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
                              ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT
                              AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
                              CLASS OR REPRESENTATIVE PROCEEDING. Further, where
                              permitted under the applicable law, unless both
                              you and Airbnb agree otherwise, the court may not
                              consolidate more than one person's claims with
                              your claims, and may not otherwise preside over
                              any form of a representative or class proceeding.
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Miscellaneous</strong>
                              <br />
                              <br />
                              8.1.{" "}
                              <span className="underline">
                                Governing Law.
                              </span>{" "}
                              These Terms of Use shall be governed by and
                              construed in accordance with the laws of the
                              Netherlands.
                              <br />
                              <br />
                              8.2.{" "}
                              <span className="underline">
                                Unsolicited Materials.
                              </span>{" "}
                              Airbnb does not accept unsolicited materials or
                              ideas for Airbnb content and is not responsible
                              for the similarity of any of its content or
                              programming in any media to materials or ideas
                              transmitted to Airbnb.
                              <br />
                              <br />
                              8.3.{" "}
                              <span className="underline">
                                Customer Support.
                              </span>{" "}
                              To find more information about our service and its
                              features or if you need assistance with your
                              account, please visit the Airbnb Help Center on
                              our website. In certain instances, Customer
                              Service may best be able to assist you by using a
                              remote access support tool through which we have
                              full access to your computer. If you do not want
                              us to have this access, you should not consent to
                              support through the remote access tool, and we
                              will assist you through other means. In the event
                              of any conflict between these Terms of Use and
                              information provided by Customer Support or other
                              portions of our website, these Terms of Use will
                              control.
                              <br />
                              <br />
                              8.4. <span className="underline">
                                Survival.
                              </span>{" "}
                              If any provision or provisions of these Terms of
                              Use shall be held to be invalid, illegal, or
                              unenforceable, the validity, legality and
                              enforceability of the remaining provisions shall
                              remain in full force and effect.
                              <br />
                              <br />
                              8.5.{" "}
                              <span className="underline">
                                Changes to Terms of Use and Assignment.
                              </span>{" "}
                              Airbnb may, from time to time, change these Terms
                              of Use. We will notify you at least 30 days before
                              such changes apply to you. We may assign or
                              transfer our agreement with you including our
                              associated rights and obligations at any time and
                              you agree to cooperate with us in connection with
                              such an assignment or transfer.
                              <br />
                              <br />
                              8.6.{" "}
                              <span className="underline">
                                Electronic Communications.
                              </span>{" "}
                              We will send you information relating to your
                              account (e.g. payment authorizations, invoices,
                              changes in password or Payment Method,
                              confirmation messages, notices) in electronic form
                              only, for example via emails to your email address
                              provided during registration.
                            </p>
                          </li>
                        </ol>
                        <p></p>
                        <p />
                      </div>
                    </div>
                  </div>
                  <p>
                    <strong>Last Updated:</strong> October 9, 2020
                  </p>
                </section>
              </div>
              <div className="right-pane">
                <div className="wrapper page-block" />
              </div>
            </div>
          </div>
          <div className="footer-push"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddonOne;
