import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log('card props', props);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='fine lookin card'/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   headline: PropTypes.string,
//   img: PropTypes.string,
//   author: PropTypes.string
// }

export default Card;
