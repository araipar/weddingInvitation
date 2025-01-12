import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              {/* <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span> */}
              <h2 className="main-font main-font__wedding">Holy Matrimony and Wedding Reception</h2>
              <span className="sub-title sub-title__wedding">Will be held at :</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Holy Matrimony"
                time="8.30 am , Western Indonesia Time"
                date="Saturday, February 1st"
                description="HKBP Bojong Menteng, Jl. Kemuning Raya III No.119, RT.003/RW.005, Bojong Menteng, Kec. Rawalumbu, Kota Bks, Jawa Barat 17117"
            />
            <WeddingInfoBox
              title="Wedding Reception"
              time="11 am - 2 pm , Western Indonesia Time "
              date="Saturday, February 1st"
              description="Graha Lestari, RT.006/RW.005, Jatirasa, Jatiasih, Bekasi, West Java 17147                                                     "
            />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
