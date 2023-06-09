import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCategory.css";

const ArticleCategory = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDetectTextClick = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);

  const onQuizTextClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const onCardHoveredSocialMediaMaClick = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  const onPrimaryLinkContainerClick = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  const onPrimaryLinkContainer1Click = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  const onPrimaryLinkContainer2Click = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  const onCardMobileAndWebDev2Click = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  const onPrimaryLinkContainer3Click = useCallback(() => {
    navigate("/article-detail");
  }, [navigate]);

  return (
    <div className="article-category">
      <div className="header1">
        <i className="home1" onClick={onHomeTextClick}>
          Home
        </i>
        <i className="articles1">Articles</i>
        <i className="home1" onClick={onDetectTextClick}>
          Detect
        </i>
        <i className="quiz1" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
      <div className="card-hovered-social-media-ma-parent">
        <div
          className="card-hovered-social-media-ma"
          onClick={onCardHoveredSocialMediaMaClick}
        >
          <div className="card-hovered">
            <div className="mask" />
          </div>
          <i className="social-media-marketi">
            Buy Now, Pay Later, Rent-to-Own, Lease-to-Own, and Layaway
          </i>
          <div className="social-media-marketi1">{`“Buy now, pay later,” rent-to-own, lease-to-own, and layaway plans let you buy things without paying in full right away. `}</div>
          <div className="primarylink" onClick={onPrimaryLinkContainerClick}>
            <div className="learnmore">
              <i className="learn-more-about">Learn More</i>
              <img
                className="iconlytwo-tonearrow-right"
                alt=""
                src="/iconlytwotonearrow--right-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="card-mobile-and-web-dev">
          <i className="mobile-and-web">
            Scammers use AI to enhance their family emergency schemes
          </i>
          <div className="social-media-marketi2">{`You get a call. There's a panicked voice on the line. It's your grandson. He says he's in deep trouble — he wrecked the car and landed in jail. `}</div>
          <div className="social-media-marketi2">{`You get a call. There's a panicked voice on the line. It's your grandson. He says he's in deep trouble — he wrecked the car and landed in jail. `}</div>
          <div className="primarylink1" onClick={onPrimaryLinkContainer1Click}>
            <div className="learnmore">
              <i className="learn-more-about">Learn More</i>
              <img
                className="iconlytwo-tonearrow-right"
                alt=""
                src="/iconlytwotonearrow--right-21.svg"
              />
            </div>
          </div>
        </div>
        <div className="card-mobile-and-web-dev1">
          <i className="mobile-and-web1">
            Are Public Wi-Fi Networks Safe? What You Need To Know
          </i>
          <div className="social-media-marketi4">
            Public Wi-Fi networks, or hotspots, in coffee shops, malls,
            airports, hotels, and other places are convenient. In the early days
            of the internet, they often weren’t secure.
          </div>
          <div className="primarylink1" onClick={onPrimaryLinkContainer2Click}>
            <div className="learnmore">
              <i className="learn-more-about">Learn More</i>
              <img
                className="iconlytwo-tonearrow-right"
                alt=""
                src="/iconlytwotonearrow--right-22.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="card-mobile-and-web-dev2"
          onClick={onCardMobileAndWebDev2Click}
        >
          <i className="mobile-and-web2">
            “Ships from the USA” doesn’t always mean “Made in the USA”
          </i>
          <div className="social-media-marketi5">{`So, you’re scrolling through Facebook or Instagram and spot an ad for clothing. Or maybe you’re shopping for gadgets on Etsy or Amazon. `}</div>
          <div className="primarylink1" onClick={onPrimaryLinkContainer3Click}>
            <div className="learnmore">
              <i className="learn-more-about">Learn More</i>
              <img
                className="iconlytwo-tonearrow-right"
                alt=""
                src="/iconlytwotonearrow--right-23.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="frame-container">
              <div className="about-us-parent">
                <div className="about-us">About Us</div>
                <div className="how-are-we">How are we different?</div>
                <div className="how-are-we">Pricing</div>
                <div className="how-are-we">Carreer</div>
                <div className="how-are-we">Integrate with your system</div>
              </div>
              <i className="domo">domo</i>
            </div>
            <div className="frame-div">
              <div className="about-us-parent">
                <div className="how-are-we">Blog</div>
                <div className="how-are-we">Case Studies</div>
                <div className="how-are-we">News</div>
              </div>
              <i className="resources">Resources</i>
            </div>
            <div className="frame-parent1">
              <div className="about-us-parent">
                <div className="how-are-we">Help Center</div>
                <div className="how-are-we">Privacy Policy</div>
                <div className="how-are-we">Privacy Request</div>
              </div>
              <i className="support">Support</i>
            </div>
            <div className="frame-parent2">
              <div className="spear-st-floor-4-san-francisc-wrapper">
                <div className="learn-more-about">
                  <p className="spear-st-floor">360 Spear St Floor 4,</p>
                  <p className="spear-st-floor">San Francisco, CA 94105</p>
                </div>
              </div>
              <i className="contact">contact</i>
            </div>
            <div className="products-parent">
              <i className="products">Products</i>
              <div className="workforce-management-parent">
                <div className="how-are-we">Workforce Management</div>
                <div className="how-are-we">{`Productivity & Communication`}</div>
                <div className="how-are-we">HR Management</div>
                <div className="how-are-we">Contingent Worker Platform</div>
                <div className="how-are-we">Contingent Worker Platform</div>
              </div>
            </div>
          </div>
          <div className="copyright-2023-all-rights-res-parent">
            <div className="copyright-2023-all">
              © Copyright 2023. All Rights Reserved.
            </div>
            <img className="frame-child" alt="" src="/group-479.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCategory;
