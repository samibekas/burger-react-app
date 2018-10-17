import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
  salad: 0.5 ,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0 ,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purshasable: false
  }

  updatePurshaseState(ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {return ingredients[igKey]}).reduce((sum, el) => {
      return sum + el
    }, 0)
    this.setState({purshasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updateIngredients})
    this.updatePurshaseState(updateIngredients);
  }



  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    } else {
      const updatedCount = oldCount - 1;
      const updateIngredients = {
        ...this.state.ingredients
      }
      updateIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceAddition
      this.setState({totalPrice: newPrice, ingredients: updateIngredients})
      this.updatePurshaseState(updateIngredients);
    }
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purshasable={this.state.purshasable}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
