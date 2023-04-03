import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizDetail.css";

const QuizDetail = () => {
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
    <div className="quiz-detail">
      <div className="detailedquiz">
        <div className="count-510">Count: 5/10</div>
        <div className="detailedquiz-child" />
        <div className="what-is-a-container">
          <span className="what-is-a-container1">
            <p className="what-is-a">
              What is a "phishing" attack in the context of cybersecurity?
            </p>
          </span>
        </div>
        <div className="quiz-options">Quiz Options:</div>
        <div className="detailedquiz-item" />
        <div className="a-a-type">
          A) A type of social engineering attack that involves tricking people
          into revealing sensitive information.
        </div>
        <div className="detailedquiz-inner" />
        <div className="b-a-type">
          B) A type of malware that infects computers and steals information.
        </div>
        <div className="rectangle-div" />
        <div className="c-a-type">
          C) A type of hacking attack that involves brute-forcing passwords.
        </div>
        <div className="submitbutton" />
        <div className="submit">Submit</div>
        <div className="nextbutton" />
        <div className="next">Next</div>
      </div>
      <div className="header4">
        <i className="home4" onClick={onHomeTextClick}>
          Home
        </i>
        <i className="home4" onClick={onArticlesTextClick}>
          Articles
        </i>
        <i className="home4" onClick={onDetectTextClick}>
          Detect
        </i>
        <i className="quiz5" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
      <div className="footer3">
        <div className="frame-parent15">
          <div className="frame-parent16">
            <div className="frame-parent17">
              <div className="about-us-parent1">
                <div className="about-us3">About Us</div>
                <div className="how-are-we3">How are we different?</div>
                <div className="how-are-we3">Pricing</div>
                <div className="how-are-we3">Carreer</div>
                <div className="how-are-we3">Integrate with your system</div>
              </div>
              <i className="domo3">domo</i>
            </div>
            <div className="frame-parent18">
              <div className="about-us-parent1">
                <div className="how-are-we3">Blog</div>
                <div className="how-are-we3">Case Studies</div>
                <div className="how-are-we3">News</div>
              </div>
              <i className="resources3">Resources</i>
            </div>
            <div className="frame-parent19">
              <div className="about-us-parent1">
                <div className="how-are-we3">Help Center</div>
                <div className="how-are-we3">Privacy Policy</div>
                <div className="how-are-we3">Privacy Request</div>
              </div>
              <i className="support3">Support</i>
            </div>
            <div className="frame-parent20">
              <div className="spear-st-floor-4-san-francisc-wrapper1">
                <div className="spear-st-floor-container3">
                  <p className="what-is-a">360 Spear St Floor 4,</p>
                  <p className="what-is-a">San Francisco, CA 94105</p>
                </div>
              </div>
              <i className="contact3">contact</i>
            </div>
            <div className="products-parent1">
              <i className="products3">Products</i>
              <div className="workforce-management-parent1">
                <div className="how-are-we3">Workforce Management</div>
                <div className="how-are-we3">{`Productivity & Communication`}</div>
                <div className="how-are-we3">HR Management</div>
                <div className="how-are-we3">Contingent Worker Platform</div>
                <div className="how-are-we3">Contingent Worker Platform</div>
              </div>
            </div>
          </div>
          <div className="copyright-2023-all-rights-res-parent1">
            <div className="copyright-2023-all3">
              © Copyright 2023. All Rights Reserved.
            </div>
            <img className="group-icon" alt="" src="/group-4792.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
