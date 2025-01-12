import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-jess.jpg';
import Groom from '@assets/images/p-rai.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Saturday, February 1st 2025';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Greetings !</h2>
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
			  We are delighted to invite you to celebrate the beginning of our new chapter together. Join us on our special day as we exchange vows and create cherished memories. Your presence would mean the world to us.</p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Jessica</h3>
				<p className="parent-name parent-name__top">
				  Daughter of Mr L. Simanjuntak <br />& Mrs D. Batubara
				</p>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Rai Paramartha</h3>
				<p className="parent-name">
				Son of Mr I Nyoman Gede Artha <br />& Mrs Ovi Natalia V
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
