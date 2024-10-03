import React from 'react';
import './howitworks.css';
import { FaHammer, FaHome, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <section className="how-it-works section-white">
            <h2>How It Works</h2>
            <div className="steps">
                <div className="step">
                    <div className="step-icon">
                        <FaHammer />
                    </div>
                    <div className="step-content">
                    <h3>Submit Your Project</h3>
                    <p>Provide us with comprehensive details about your construction project, including the type of work, scale, specific requirements, and deadlines. Whether you need help with residential renovations . </p>
                    </div>
                    
                </div>
                <div className="step">
                    <div className="step-icon">
                        <FaHome />
                    </div>
                    <div className="step-content">
                    <h3>Get Matched with Professionals</h3>
                    <p>Once we have your project details, our system intelligently matches you with highly qualified professionals who specialize in your specific construction needs. </p>
                    </div>
                   
                </div>
                <div className="step">
                    <div className="step-icon">
                        <FaHandshake />
                    </div>
                    <div className="step-content">
                    <h3>Start Your Project</h3>
                    <p>After matching with the right professionals, collaborate closely to bring your project to life. From the initial consultation to detailed planning and execution. </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
