import React from 'react';
import './offers.css';
import { MdOutlineDesignServices } from 'react-icons/md';

const Offers = () => {
    return (
        <section className='container'>
            <div className='section-header'>
                <h5>My services</h5>
                <h2>Here's what I can do</h2>
            </div>

            <div className='offer-container'>

                <div className='offer-card'>
                    <h3><MdOutlineDesignServices /> Design and Prototype</h3>
                </div>
            </div>

        </section>
    );
};

export default Offers;