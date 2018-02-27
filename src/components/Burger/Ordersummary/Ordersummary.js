import React from 'react';
import AUX from "../../../hoc/Aux";
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                            .map((igkey) => {
                                return (<li key={igkey}>
                                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                                </li>)
                            })
    return (
        <AUX>
            <h3>Your Order</h3>
            <p>A delicious burger with the follwing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Contiue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </AUX>
    );  
};

export default orderSummary;
