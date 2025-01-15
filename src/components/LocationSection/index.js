import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import Peta from '@assets/images/peta.jpeg';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Location</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Jatiasih, Kota Bekasi</strong>
                </a>{' '}
                <br />
                Graha Lestari, RT.006/RW.005, Jatirasa, Jatiasih, Bekasi, West Java 17147
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.871958754813!2d106.97197057499089!3d-6.280558893708293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d9bcb4837cb%3A0xebb20753b7705b6e!2sGedung%20Graha%20Lestari!5e0!3m2!1sen!2sid!4v1733241275421!5m2!1sen!2sid" 
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Jess & Rai Wedding Party"
              ></iframe>
            </div>
            {/* <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <img
                  src={Peta}
                  class="center"
                  display="block"
                  margin-left="auto"
                  margin-right="auto"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  aria-hidden="false"
                  tabIndex="0"
                  title="Peta Lokasi"
                  alt="peta-lokasi-cangkring"
                ></img>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
