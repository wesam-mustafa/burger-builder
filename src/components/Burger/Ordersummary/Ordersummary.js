import React from "react";
import AUX from "../../../hoc/Aux";
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
            <p>Contiue to checkout?</p>
        </AUX>
    );  
};

export default orderSummary;
