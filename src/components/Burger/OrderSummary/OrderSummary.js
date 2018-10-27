import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
    )});

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicioussss burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total price: <strong>{props.price.toFixed(2)}€</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;
