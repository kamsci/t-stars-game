import React from 'react';

//////////////////////////////////////////////

const Numbers = (props) => {
  const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div className="card text-center">
        <div>
          {arrayOfNumbers.map((number, i) => 
            <span key={i}>{number}</span>
          )}
        </div>
      </div>
    );
}

export default Numbers;