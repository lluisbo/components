import React from "react";
import "./ButtonFlex.css";

//Here you may define the name of each button style.
const STYLES = [
      /* e.g  "btn-primary-solid"*/ /* Default button*/
      "btn--icon--outline",
      "btn--iconClicked--outline"
      
];
// Here you may define the name of each button size.
const SIZES = [
      /* e.g "Btn--small", "Btn--standard"*/
];
// MAIN COMPONENT.
export const Button = ({
       children,
       type,
       onClick,
       buttonStyle,
       buttonSize
}) => {

      /* This const checks out all styles included in const= STYLES 
      returning the matcing one. If a style value is not defined
      it will return the first value of the array (the first value should be setted
      as your primary style button)*/

  const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle 
        : STYLES[0];

     /* This const checks out all sizes included in const= SIzes 
      returning the matcing one. If a size value is not defined
      it will return the first value of the array (the first value should be setted
      as your primary size button)*/

  const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0]; 

  return (
    <button
       className={`btn ${checkButtonStyle} ${checkButtonSize}`}
       onClick={onClick}
       type={type}
    >
       {children}
    </button>
    /* e.g <Button 
              onClick={handleClick} 
              type='button' 
              buttonStyle='btn--primary--solid'
              buttonSize='btn--small'
           >
              Click Me
           </Button>*/
  );
};