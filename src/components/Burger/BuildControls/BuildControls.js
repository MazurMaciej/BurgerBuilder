import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current price:  <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(item => <BuildControl
      key={item.label}
      label={item.label}
      added={() => props.ingredientAdded(item.type)}
      remove={() => props.ingredientRemove(item.type)}
      disabled={props.disabled[item.type]}
    />)}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.show}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;