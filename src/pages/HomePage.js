import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onLabelTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onButtonsContainer1Click = useCallback(() => {
    navigate("/detect-page");
  }, [navigate]);

  const onLabelText1Click = useCallback(() => {
    navigate("/detect-page");
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
    <div className="home-page">
      <div className="text">
        <div className="title">
          <i className="we-are-creative-container">
            <p className="we-understand-the">{`We understand the riskiness of `}</p>
            <p className="we-understand-the">Internet scams</p>
          </i>
          <div className="at-double-squere">
            Phishing scams are a very dangerous form of cybercrime that aims to
            trick people into entering sensitive personal information such as
            account numbers, passwords, bank card numbers, social security
            numbers, etc. by spoofing legitimate websites.
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="buttons1" onClick={onButtonsContainerClick}>
          <div className="buttonprimary">
            <i className="label" onClick={onLabelTextClick}>
              Lern More About internet fraud
            </i>
          </div>
        </div>
        <div className="buttons2" onClick={onButtonsContainer1Click}>
          <div className="buttonsecondary">
            <i className="label" onClick={onLabelText1Click}>
              Detect Web URL for free
            </i>
          </div>
        </div>
      </div>
      <div className="header">
        <i className="home">Home</i>
        <i className="articles" onClick={onArticlesTextClick}>
          Articles
        </i>
        <i className="articles" onClick={onDetectTextClick}>
          Detect
        </i>
        <i className="quiz" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
    </div>
  );
};

export default HomePage;
