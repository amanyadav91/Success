import React from 'react'
import './ThankYou.css';
function ThankYou() {
    return (
        <div className='thankpage'>
            <div className="thank-you">
            <img width="188" height="188" src="https://img.icons8.com/3d-fluency/188/ok.png" alt="ok"/>
                <h1>Thank you for ordering!</h1>
                  <h2>Order Succesfully Placed</h2>
                <p>Order ID: OD429878791602739100
                    Order Date: 07-12-2023
                    Invoice Date: 07-12-2023</p>
                <div className="button-container">
                    <button className="view-order">VIEW ORDER</button>
                    <button className="continue-shopping">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>
    );
}

export default ThankYou