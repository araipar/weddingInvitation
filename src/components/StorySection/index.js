import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';
import BankImg from '@assets/images/bca.png';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
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
        <div className="col-md-12 col-md-offset-0" style={{ textAlign: 'center' }}>
          <img 
            src={BankImg}
            alt="BCA Logo" 
            className="bank-logo" 
            style={{ maxWidth: '180px', margin: '10px auto', display: 'block' }} 
          />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>8705311508 </p>
          <p style={{ marginTop: '10px' }}>a.n. Adwitya Rai Paramartha </p>
          <button 
            onClick={() => navigator.clipboard.writeText('8705311508')}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#f14e95',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            Copy Number
          </button>
        </div>
      </div>
    </div>
  </div>
</Fragment>

  );
}

export default StorySection;
