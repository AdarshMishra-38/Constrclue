import React from 'react';
import './feature.css';
import { FaHammer, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const Feature = () => {
    return (
        <section className="features">
            <h2>Our Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="feature-icon">
                        <FaHammer />
                    </div>
                    <div className="feature-content">
                    <h3>Quality Workmanship</h3>
                    <p>We guarantee that all construction projects adhere to the highest standards of craftsmanship, ensuring not only aesthetic appeal but also long-term durability. </p>

                    </div>
                    
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <FaUsers />
                    </div>

                    <div className="feature-content">
                    <h3>Expert Professionals</h3>
                    <p>Our network includes vetted professionals who are experts in their respective fields, from general contractors to specialized trades such as electricians, plumbers, and architects. </p>

                    </div>
                    
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <FaClipboardCheck />
                    </div>
                    <div className="feature-content">
                    <h3>Transparent Process</h3>
                    <p>We pride ourselves on providing a transparent process from the moment you submit your project to its final completion. You will receive regular updates at each stage of the construction, so you're never in the dark.</p>

                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Feature;
