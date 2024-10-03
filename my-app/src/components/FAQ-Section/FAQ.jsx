import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="question">
                <h4>Is there a free plan?</h4>
                <p>Yes! We offer a free plan with basic features and templates.</p>
            </div>
            <div className="question">
                <h4>Is the working environment good?</h4>
                <p>Yes</p>
            </div>
        </section>
    );
};

export default FAQ;
