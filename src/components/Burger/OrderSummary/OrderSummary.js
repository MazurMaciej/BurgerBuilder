import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    item => {
      return (
        <li key={item}>
          <span style={{ textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}
        </li >
      )
    }
  )

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <p><strong>Total price for your burger: {props.burgerPrice.toFixed(2)} $.</strong></p>
      <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
      <Button clicked={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
    </>
  )
};

export default orderSummary;