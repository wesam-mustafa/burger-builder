import React, {Component} from 'react';
import AUX from "../../../hoc/Aux/Aux";
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
  //this could be a functional component, it doesn't have to be stateful component

  componentWillUpdate() {
      console.log('[OrderSummary] WillUpdated');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
          {this.props.ingredients[igkey]}
        </li>
      );
    });
    return (
      <AUX>
        <h3>Your Order</h3>
        <p>A delicious burger with the follwing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Contiue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </AUX>
    );
  }
}

export default OrderSummary;
