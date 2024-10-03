


// import React, { useState } from 'react';
// import './navbar.css';  // Import the CSS file for the navbar
// import './logo.svg';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <a href='./'>
//                 <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="41.000000pt" height="30.000000pt" viewBox="0 0 411.000000 347.000000" preserveAspectRatio="xMidYMid meet">
//                         <g transform="translate(0.000000,347.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
//                             <path d="M148 2393 c-2 -466 0 -857 4 -869 3 -11 233 -199 510 -417 276 -218 589 -465 694 -549 175 -141 291 -232 557 -440 54 -43 106 -78 116 -78 25 0 183 118 179 134 -3 16 -132 123 -318 266 -68 52 -139 109 -159 127 -35 31 -36 31 -17 52 36 39 11 55 384 -241 102 -82 190 -148 196 -148 21 0 201 142 201 158 0 8 -65 67 -145 129 -344 270 -361 284 -358 301 2 9 15 21 30 26 23 8 33 4 77 -30 27 -21 121 -94 208 -160 87 -67 180 -140 208 -163 27 -22 58 -41 68 -41 23 0 209 140 204 154 -2 6 -44 42 -93 79 -303 231 -414 322 -414 341 0 7 11 19 25 26 30 16 27 19 260 -165 238 -187 289 -225 305 -225 12 0 106 68 183 132 28 23 28 24 10 44 -18 22 -348 284 -458 365 -33 24 -117 89 -186 144 -364 290 -342 275 -363 260 -7 -5 -65 -50 -127 -99 -128 -100 -207 -141 -299 -158 -129 -22 -286 29 -386 126 -30 29 -54 57 -54 64 0 6 69 60 153 120 83 60 247 180 362 267 116 88 243 184 283 214 39 30 70 56 69 58 -2 2 -64 8 -138 13 -594 44 -1115 270 -1470 636 -104 108 -157 176 -225 289 -31 52 -61 98 -65 101 -5 2 -10 -377 -11 -843z"/>
//                             <path d="M3929 3118 c-295 -482 -876 -818 -1545 -894 -76 -8 -153 -19 -171 -22 -20 -4 -125 -78 -269 -187 -212 -161 -551 -413 -615 -457 -34 -23 -18 -45 66 -88 59 -31 79 -35 154 -38 123 -5 171 15 348 149 79 60 151 113 161 118 22 12 37 4 132 -74 63 -52 466 -367 739 -579 42 -32 92 -73 111 -91 19 -18 52 -45 74 -59 l38 -26 47 32 c25 18 107 77 181 133 74 55 233 172 353 260 120 87 225 168 233 179 12 17 14 146 14 858 0 500 -4 838 -9 838 -5 0 -24 -24 -42 -52z"/>
//                         </g>
//                     </svg>
//                     <h2 className="company-name">ConstructionClue</h2>
//                 </a>
//             </div>

//             {/* Hamburger Icon */}
//             <div className="hamburger" onClick={toggleMenu}>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div>

//             {/* Sidebar with Menu Items */}
//             <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//                 <li className="close-btn" onClick={toggleMenu}>&times;</li> {/* Close button */}
//                 <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//                 <li><a href="#about" onClick={toggleMenu}>About</a></li>
//                 <li><a href="#contact" onClick={toggleMenu}>Services</a></li>
//                 <li><a href="#login" onClick={toggleMenu}>Login</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import './navbar.css';  // Import the CSS file for the navbar
import './logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href='./'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="41.000000pt" height="30.000000pt" viewBox="0 0 411.000000 347.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,347.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                            <path d="M148 2393 c-2 -466 0 -857 4 -869 3 -11 233 -199 510 -417 276 -218 589 -465 694 -549 175 -141 291 -232 557 -440 54 -43 106 -78 116 -78 25 0 183 118 179 134 -3 16 -132 123 -318 266 -68 52 -139 109 -159 127 -35 31 -36 31 -17 52 36 39 11 55 384 -241 102 -82 190 -148 196 -148 21 0 201 142 201 158 0 8 -65 67 -145 129 -344 270 -361 284 -358 301 2 9 15 21 30 26 23 8 33 4 77 -30 27 -21 121 -94 208 -160 87 -67 180 -140 208 -163 27 -22 58 -41 68 -41 23 0 209 140 204 154 -2 6 -44 42 -93 79 -303 231 -414 322 -414 341 0 7 11 19 25 26 30 16 27 19 260 -165 238 -187 289 -225 305 -225 12 0 106 68 183 132 28 23 28 24 10 44 -18 22 -348 284 -458 365 -33 24 -117 89 -186 144 -364 290 -342 275 -363 260 -7 -5 -65 -50 -127 -99 -128 -100 -207 -141 -299 -158 -129 -22 -286 29 -386 126 -30 29 -54 57 -54 64 0 6 69 60 153 120 83 60 247 180 362 267 116 88 243 184 283 214 39 30 70 56 69 58 -2 2 -64 8 -138 13 -594 44 -1115 270 -1470 636 -104 108 -157 176 -225 289 -31 52 -61 98 -65 101 -5 2 -10 -377 -11 -843z"/>
                            <path d="M3929 3118 c-295 -482 -876 -818 -1545 -894 -76 -8 -153 -19 -171 -22 -20 -4 -125 -78 -269 -187 -212 -161 -551 -413 -615 -457 -34 -23 -18 -45 66 -88 59 -31 79 -35 154 -38 123 -5 171 15 348 149 79 60 151 113 161 118 22 12 37 4 132 -74 63 -52 466 -367 739 -579 42 -32 92 -73 111 -91 19 -18 52 -45 74 -59 l38 -26 47 32 c25 18 107 77 181 133 74 55 233 172 353 260 120 87 225 168 233 179 12 17 14 146 14 858 0 500 -4 838 -9 838 -5 0 -24 -24 -42 -52z"/>
                        </g>
                    </svg>
                    <h2 className="company-name">ConstructionClue</h2>
                </a>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Sidebar with Menu Items */}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {/* Close button visible only in the sidebar (for mobile) */}
                {isOpen && (
                    <li className="close-btn" onClick={toggleMenu}>&times;</li>
                )}
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Services</a></li>
                <li><a href="#login" onClick={toggleMenu}>Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
