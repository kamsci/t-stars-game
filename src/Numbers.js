import React from 'react';

//////////////////////////////////////////////

const Numbers = (props) => {

    return (
      <div className="card text-center">
        <div>
          {Numbers.List.map((number, i) => 
            <span key={i}
                  onClick={() => props.onClickNumber(number)}>{number}</span>
          )}
        </div>
      </div>
    );
}

/* Store data on object to be used by all instances of that object. 
Do this if variable will be share exactly 'as is' with all instances 
and is not related to any logic inside that component */
Numbers.List = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default Numbers;