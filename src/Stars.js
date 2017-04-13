import React from 'react';

//////////////////////////

const Stars = (props) => {
  // Moved randomNumberOfStarts up to Game component to avoid reload on every Number click


  let stars = [];
  for(let i = 0; i < props.numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>)
  }
  
  return (
    <div className="col-sm-5">
      {stars}
    </div>
  );
}

export default Stars;