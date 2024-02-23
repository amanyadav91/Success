import React from 'react'
import './ThankYou.css';
function ThankYou() {
    return (
        <div>
            <div className="thank-you">
                <h1>Thank you for ordering!</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqua.</p>
                <div className="button-container">
                    <button className="view-order">VIEW ORDER</button>
                    <button className="continue-shopping">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    );
}

export default ThankYou