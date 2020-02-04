import React from 'react';

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
    </>
  )
};

export default orderSummary;