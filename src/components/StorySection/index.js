import React, { useState, Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';
import BankImg from '@assets/images/bca.png';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8705311508");
    setCopied(true);

    // Hide the notification after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Fragment>
      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Wedding Gift</h2>
              <p className="sub-title">
                Your presence at our wedding is the most cherished gift of all.
                However, if you would like to honor us with a gift, a contribution
                to our future together would mean the world to us.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0" style={{ textAlign: "center" }}>
              <img
                src={BankImg}
                alt="BCA Logo"
                className="bank-logo"
                style={{ maxWidth: "250px", margin: "10px auto", display: "block" }}
              />
              <br></br>
              <p style={{ marginTop: "10px", fontWeight: "bold" }}> 8705311508</p>
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>a.n. Adwitya Rai Paramartha</p>
              <button
                onClick={handleCopy}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Copy Number
              </button>
            </div>
          </div>
          <div className="Row">
          <div className="col-md-12 col-md-offset-0" style={{ textAlign: "center" }}>
          {copied && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                    border: "1px solid #c3e6cb",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  Number Copied!
                </div>
              )}
              </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default StorySection;
