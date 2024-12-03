import React, { Fragment } from 'react';
import { bool } from 'prop-types';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2024 Created by Rai with lots of 🤎 for Jess.</small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=yQORL_z-UsA" target="_blank" rel="noreferrer">
                    Travis Scott - sdp interlude (Extended)
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
