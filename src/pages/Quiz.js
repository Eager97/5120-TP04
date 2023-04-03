import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onSTARTTextClick = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

  const onSTARTText2Click = useCallback(() => {
    navigate("/quiz-detail");
  }, [navigate]);

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
    <div className="quiz3">
      <img className="quizimagegroup-icon" alt="" src="/group-10482@2x.png" />
      <div className="footer2">
        <div className="frame-parent9">
          <div className="frame-parent10">
            <div className="frame-parent11">
              <div className="about-us-container">
                <div className="about-us2">About Us</div>
                <div className="how-are-we2">How are we different?</div>
                <div className="how-are-we2">Pricing</div>
                <div className="how-are-we2">Carreer</div>
                <div className="how-are-we2">Integrate with your system</div>
              </div>
              <i className="domo2">domo</i>
            </div>
            <div className="frame-parent12">
              <div className="about-us-container">
                <div className="how-are-we2">Blog</div>
                <div className="how-are-we2">Case Studies</div>
                <div className="how-are-we2">News</div>
              </div>
              <i className="resources2">Resources</i>
            </div>
            <div className="frame-parent13">
              <div className="about-us-container">
                <div className="how-are-we2">Help Center</div>
                <div className="how-are-we2">Privacy Policy</div>
                <div className="how-are-we2">Privacy Request</div>
              </div>
              <i className="support2">Support</i>
            </div>
            <div className="frame-parent14">
              <div className="spear-st-floor-4-san-francisc-frame">
                <div className="spear-st-floor-container2">
                  <p className="this-quiz-consists">360 Spear St Floor 4,</p>
                  <p className="this-quiz-consists">San Francisco, CA 94105</p>
                </div>
              </div>
              <i className="contact2">contact</i>
            </div>
            <div className="products-container">
              <i className="products2">Products</i>
              <div className="workforce-management-container">
                <div className="how-are-we2">Workforce Management</div>
                <div className="how-are-we2">{`Productivity & Communication`}</div>
                <div className="how-are-we2">HR Management</div>
                <div className="how-are-we2">Contingent Worker Platform</div>
                <div className="how-are-we2">Contingent Worker Platform</div>
              </div>
            </div>
          </div>
          <div className="copyright-2023-all-rights-res-container">
            <div className="copyright-2023-all2">
              © Copyright 2023. All Rights Reserved.
            </div>
            <img className="frame-inner" alt="" src="/group-4791.svg" />
          </div>
        </div>
      </div>
      <div className="quizcard2">
        <div className="background" />
        <div className="content1">
          <span className="content-txt">
            <p className="this-quiz-consists">
              This quiz consists of 5 multiple-choice questions. To be
              successful with the quizzes, it’s important to conversant with the
              topics. Keep the following in mind: 
            </p>
            <p className="this-quiz-consists">
              Timing - You need to complete each of your attempts in one
              sitting, as you are allotted 30 minutes to each attempt.
            </p>
            <p className="this-quiz-consists">
              Answers - You may review your answer-choices and compare them to
              the correct answers after your final attempt.
            </p>
            <p className="this-quiz-consists"></p>
            <p className="this-quiz-consists">
              To start, click the "Start" button. When finished, click the
              "Submit " button.
            </p>
          </span>
        </div>
        <b className="title1">Password Protection Quiz</b>
        <div className="points">Points:</div>
        <div className="time-limit">{`Time Limit: `}</div>
        <div className="date">{`Date: `}</div>
        <img
          className="button-icon"
          alt=""
          src="/rectangle-300.svg"
          onClick={onButtonClick}
        />
        <div className="instructions">Instructions</div>
        <img className="quizcardimage2-icon" alt="" src="/security-1@2x.png" />
        <div className="start" onClick={onSTARTTextClick}>
          START
        </div>
      </div>
      <div className="quizcard1">
        <div className="background" />
        <div className="instructions1">Instructions</div>
        <div className="points1">Points:</div>
        <div className="time-limit1">{`Time Limit: `}</div>
        <div className="date1">Date:</div>
        <img
          className="button-icon1"
          alt=""
          src="/rectangle-300.svg"
          onClick={onButton1Click}
        />
        <div className="start1">START</div>
        <div className="content2">
          <span className="content-txt">
            <p className="this-quiz-consists">
              This quiz consists of 5 multiple-choice questions. To be
              successful with the quizzes, it’s important to conversant with the
              topics. Keep the following in mind: 
            </p>
            <p className="this-quiz-consists">
              Timing - You need to complete each of your attempts in one
              sitting, as you are allotted 30 minutes to each attempt.
            </p>
            <p className="this-quiz-consists">
              Answers - You may review your answer-choices and compare them to
              the correct answers after your final attempt.
            </p>
            <p className="this-quiz-consists"></p>
            <p className="this-quiz-consists">
              To start, click the "Start" button. When finished, click the
              "Submit " button.
            </p>
          </span>
        </div>
        <b className="title2">Online Security Quiz</b>
        <img className="quizcardimage1-icon" alt="" src="/password-1@2x.png" />
        <div className="start2" onClick={onSTARTText2Click}>
          START
        </div>
      </div>
      <div className="header3">
        <i className="home3" onClick={onHomeTextClick}>
          Home
        </i>
        <i className="home3" onClick={onArticlesTextClick}>
          Articles
        </i>
        <i className="home3" onClick={onDetectTextClick}>
          Detect
        </i>
        <i className="quiz4" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
    </div>
  );
};

export default Quiz;
