import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArticlesTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onDetectTextClick = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);

  const onQuizTextClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <div className="article-detail">
      <div className="footer1">
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="about-us-group">
                <div className="about-us1">About Us</div>
                <div className="how-are-we1">How are we different?</div>
                <div className="how-are-we1">Pricing</div>
                <div className="how-are-we1">Carreer</div>
                <div className="how-are-we1">Integrate with your system</div>
              </div>
              <i className="domo1">domo</i>
            </div>
            <div className="frame-parent6">
              <div className="about-us-group">
                <div className="how-are-we1">Blog</div>
                <div className="how-are-we1">Case Studies</div>
                <div className="how-are-we1">News</div>
              </div>
              <i className="resources1">Resources</i>
            </div>
            <div className="frame-parent7">
              <div className="about-us-group">
                <div className="how-are-we1">Help Center</div>
                <div className="how-are-we1">Privacy Policy</div>
                <div className="how-are-we1">Privacy Request</div>
              </div>
              <i className="support1">Support</i>
            </div>
            <div className="frame-parent8">
              <div className="spear-st-floor-4-san-francisc-container">
                <div className="spear-st-floor-container1">
                  <p className="by-alvaro-puig">360 Spear St Floor 4,</p>
                  <p className="by-alvaro-puig">San Francisco, CA 94105</p>
                </div>
              </div>
              <i className="contact1">contact</i>
            </div>
            <div className="products-group">
              <i className="products1">Products</i>
              <div className="workforce-management-group">
                <div className="how-are-we1">Workforce Management</div>
                <div className="how-are-we1">{`Productivity & Communication`}</div>
                <div className="how-are-we1">HR Management</div>
                <div className="how-are-we1">Contingent Worker Platform</div>
                <div className="how-are-we1">Contingent Worker Platform</div>
              </div>
            </div>
          </div>
          <div className="copyright-2023-all-rights-res-group">
            <div className="copyright-2023-all1">
              © Copyright 2023. All Rights Reserved.
            </div>
            <img className="frame-item" alt="" src="/group-4791.svg" />
          </div>
        </div>
      </div>
      <i className="by-alvaro-puig-container">
        <p className="by-alvaro-puig">By Alvaro Puig</p>
        <p className="by-alvaro-puig">
          Consumer Education Specialist March 20, 2023
        </p>
      </i>
      <div className="content">
        <div className="social-media-marketi-container">
          <p className="by-alvaro-puig">
            Artificial intelligence is no longer a far-fetched idea out of a
            sci-fi movie. We're living with it, here and now. A scammer could
            use AI to clone the voice of your loved one. All he needs is a short
            audio clip of your family member's voice — which he could get from
            content posted online — and a voice-cloning program. When the
            scammer calls you, he’ll sound just like your loved one.
          </p>
          <p className="by-alvaro-puig">&nbsp;</p>
          <p className="by-alvaro-puig">
            So how can you tell if a family member is in trouble or if it’s a
            scammer using a cloned voice?
          </p>
          <p className="by-alvaro-puig">&nbsp;</p>
          <p className="by-alvaro-puig">
            Don’t trust the voice. Call the person who supposedly contacted you
            and verify the story. Use a phone number you know is theirs. If you
            can’t reach your loved one, try to get in touch with them through
            another family member or their friends.
          </p>
          <p className="by-alvaro-puig">&nbsp;</p>
          <p className="by-alvaro-puig">
            {`Scammers ask you to pay or send money in ways that make it hard to get your money back. If the caller says to `}
            <a
              className="wire-money"
              href="https://consumer.ftc.gov/articles/you-wire-money"
              target="_blank"
            >
              <span className="wire-money1">wire money</span>
            </a>
            {`, send `}
            <a
              className="wire-money"
              href="http://www.consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams"
              target="_blank"
            >
              <span className="wire-money1">cryptocurrency</span>
            </a>
            {`, or `}
            <a
              className="wire-money"
              href="https://consumer.ftc.gov/articles/gift-card-scams#what%20to%20do"
              target="_blank"
            >
              <span className="wire-money1">buy gift cards</span>
            </a>{" "}
            and give them the card numbers and PINs, those could be signs of a
            scam.
          </p>
        </div>
        <div className="social-media-marketi6">
          You get a call. There's a panicked voice on the line. It's your
          grandson. He says he's in deep trouble — he wrecked the car and landed
          in jail. But you can help by sending money. You take a deep breath and
          think. You've heard about grandparent scams. But darn, it sounds just
          like him. How could it be a scam? Voice cloning, that's how.
        </div>
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <i className="creative-treat-with-container">
          <p className="by-alvaro-puig">
            Scammers use AI to enhance their family emergency schemes
          </p>
          <p className="by-alvaro-puig">&nbsp;</p>
        </i>
      </div>
      <div className="header2">
        <i className="home2" onClick={onHomeTextClick}>
          Home
        </i>
        <i className="articles2" onClick={onArticlesTextClick}>
          Articles
        </i>
        <i className="home2" onClick={onDetectTextClick}>
          Detect
        </i>
        <i className="quiz2" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
    </div>
  );
};

export default ArticleDetail;
