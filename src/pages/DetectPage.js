import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DetectPage.css";

const DetectPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArticlesTextClick = useCallback(() => {
    navigate("/article-category");
  }, [navigate]);

  const onQuizTextClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const handleUrlInputChange = (event) => {
    setUrlInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value.replace(/\r?\n/g, ""));
  };

  const handleUrlSubmit = () => {
    console.log("Submitted URL:", urlInput);
    // Send URL to backend
    setUrlInput("");
  };

  const handlePasswordSubmit = () => {
    console.log("Submitted password:", passwordInput);
    // Send password to backend
    setPasswordInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (event.target.id === "urlInput") {
        handleUrlSubmit();
      } else if (event.target.id === "passwordInput") {
        handlePasswordSubmit();
      }
    }
  };

  return (
    <div className="detect-page">
      <div className="newsletter">
        <div className="title-text">
          <i className="test-your-password">Test your password strength</i>
          <div className="inputsearch">
            <div className="inputsearch-child" />
            <div className="label-parent">
              <input
                className="input2"
                placeholder="Enter a password"
                value={passwordInput}
                onChange={handlePasswordInputChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handlePasswordSubmit();
                  }
                }}
              />
              <div className="buttonsecondary1">
                <div
                  className="iconlybulksend-parent"
                  onClick={handlePasswordSubmit}
                >
                  <img
                    className="iconlybulksend"
                    alt=""
                    src="/iconlybulksend.svg"
                  />
                  <i className="label3">Test</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter1">
        <div className="title-text1">
          <i className="test-your-password">Detect the URL of website</i>
          <div className="inputsearch">
            <div className="inputsearch-child" />
            <div className="label-parent">
              <input
                className="input2"
                placeholder="Enter the URL..."
                value={urlInput}
                onChange={handleUrlInputChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleUrlSubmit();
                  }
                }}
              />
              <div className="buttonsecondary1">
                <div
                  className="iconlybulksend-parent"
                  onClick={handleUrlSubmit}
                >
                  <img
                    className="iconlybulksend"
                    alt=""
                    src="/iconlybulksend1.svg"
                  />
                  <i className="label3">Detect</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header5">
        <i className="home5" onClick={onHomeTextClick}>
          Home
        </i>
        <i className="home5" onClick={onArticlesTextClick}>
          Articles
        </i>
        <i className="detect5">Detect</i>
        <i className="quiz6" onClick={onQuizTextClick}>
          Quiz
        </i>
      </div>
    </div>
  );
};

export default DetectPage
