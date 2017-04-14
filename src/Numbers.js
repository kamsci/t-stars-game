import React from 'react';

//////////////////////////////////////////////

const Numbers = (props) => {  
  // Create CSS class for when the number is selected
  const addNumberClass = (number) => {
    let numberClasses
    if(props.selectedNumbers.indexOf(number) >= 0) {
      numberClasses = 'selected disabled';
    }
    else if(props.usedNumbers.indexOf(number) >= 0) {
      numberClasses = 'used disabled';
    }
    return numberClasses;
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.List.map((number, i) => 
          <span key={i}
                onClick={() => props.onClickNumber(number)}
                className={addNumberClass(number)}>{number}</span>
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