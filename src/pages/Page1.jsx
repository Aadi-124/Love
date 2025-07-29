import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Next Page Component - A simple placeholder for the next page
const NextPageContent = ({ onGoBack }) => {
    return (
        <div className="next-page-container">
            <h2 className="next-page-title">Welcome to the Next Page! 🎉</h2>
            <p className="next-page-text">This is a placeholder for more amazing content.</p>
            <button onClick={onGoBack} className="go-back-button">
                Go Back
            </button>
        </div>
    );
};

const Page1 = () => {

    const navigate = useNavigate();

    const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' });
    const [showPopup, setShowPopup] = useState(false);
    const [isNoButtonDodging, setIsNoButtonDodging] = useState(false);
    const [currentSide, setCurrentSide] = useState('right');
    const [currentPage, setCurrentPage] = useState('main');

    const noButtonRef = useRef(null);
    const lastPosition = useRef({ top: 0, left: 0 });

    const handleNoHover = () => {
        if (!isNoButtonDodging) {
            setIsNoButtonDodging(true);
        }

        if (noButtonRef.current) {
            const buttonWidth = noButtonRef.current.offsetWidth;
            const buttonHeight = noButtonRef.current.offsetHeight;

            const maxLeft = window.innerWidth - buttonWidth;
            const maxTop = window.innerHeight - buttonHeight;

            const generateFarPosition = (last, max) => {
                const bigJump = max * 0.4;
                let pos;
                do {
                    pos = Math.random() * max;
                } while (Math.abs(pos - last) < bigJump);
                return pos;
            };

            const newLeft = generateFarPosition(lastPosition.current.left, maxLeft);
            const newTop = generateFarPosition(lastPosition.current.top, maxTop);

            setNoButtonPosition({
                top: `${newTop}px`,
                left: `${newLeft}px`
            });

            lastPosition.current = { top: newTop, left: newLeft };
            setCurrentSide(currentSide === 'left' ? 'right' : 'left');
        }
    };

    const handleYesClick = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const goToNextPage = () => {
        setShowPopup(false);
        setCurrentPage('next');
    };

    const goToMainPage = () => {
        setCurrentPage('main');
        setIsNoButtonDodging(false);
        setNoButtonPosition({ top: 'auto', left: 'auto' });
        setCurrentSide('right');
    };

    const noButtonText = isNoButtonDodging ? 'pakd pakd 😁' : ' NO 😅';
    const noButtonColorClass = isNoButtonDodging ? 'button-no-dodging' : 'button-no-initial';

    return (
        <div className="Page1-container">
            {currentPage === 'main' && (
                <>
                    <div className="main-card">
                        <h1 className="question-text">
                            Do you love me? <span className="emoji">😚💓</span>
                        </h1>

                        <div className="buttons-container">
                            <button onClick={handleYesClick} className="button-yes">
                                Yes <span className="emoji">💖</span>
                            </button>

                            <button
                                ref={noButtonRef}
                                onMouseEnter={handleNoHover}
                                style={isNoButtonDodging ? {
                                    top: noButtonPosition.top,
                                    left: noButtonPosition.left,
                                    position: 'fixed',
                                } : {}}
                                className={`button-no ${noButtonColorClass}`}
                            >
                                {noButtonText}
                            </button>
                        </div>
                    </div>

                    {showPopup && (
                        <div className="popup-overlay animate-fade-in">
                            <div className="popup-content animate-zoom-in">
                                <button
                                    onClick={closePopup}
                                    className="popup-close-button"
                                    aria-label="Close popup"
                                >
                                    &times;
                                </button>
                                <p className="popup-text-main">
                                    Mla Mahit Hota mazya Duggu la me Khup Awdto <span className="emoji">🥰💞</span>
                                </p>
                                <p className="popup-text-sub">
                                    Thank You Duggu! <span className="emoji">🥺💖</span>
                                </p>
                                <button onClick={()=>{navigate("/page2")}} className="next-page-button" >
                                    Chal pudhe Ankhi kahi tri ahe 😁
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {currentPage === 'next' && <NextPageContent onGoBack={goToMainPage} />}

            {/* Inline CSS */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

                .Page1-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #fce4ec 0%, #e0e0ff 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Inter', sans-serif;
                }

                .main-card {
                    background-color: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                                0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    padding: 48px;
                    text-align: center;
                    max-width: 576px;
                    width: 100%;
                    z-index: 10;
                }

                .question-text {
                    font-size: 48px;
                    font-weight: 800;
                    color: #db2777;
                    margin-bottom: 32px;
                }

                .question-text .emoji {
                    font-size: 36px;
                }

                .buttons-container {
                    position: relative;
                    height: 192px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                }

                .button-yes, .button-no {
                    color: #ffffff;
                    font-weight: 700;
                    padding: 16px 32px;
                    border-radius: 9999px;
                    font-size: 24px;
                    border: none;
                    cursor: pointer;
                    outline: none;
                    transition: all 0.3s ease-in-out;
                    z-index: 20;
                }

                .button-yes {
                    background-color: #ec4899;
                }

                .button-yes:hover {
                    background-color: #db2777;
                }

                .button-no {
    color: #ffffff;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-in-out;
    z-index: 20;
}

/* 🔹 BEFORE FIRST HOVER: Exactly like Yes button */
.button-no-initial {
    background-color: #ec4899;
    font-size: 24px;
    padding: 16px 32px;
}
.button-no-initial:hover {
    background-color: #db2777;
}

/* 🔸 AFTER FIRST HOVER: Dodging style */
.button-no-dodging {
    background-color: #f87171;
    font-size: 20px;
    padding: 12px 24px;
    position: fixed;
    transition: top 0.2s ease-out, left 0.2s ease-out, background-color 0.2s ease-out;
}
.button-no-dodging:hover {
    background-color: #ef4444;
}


                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 50;
                    padding: 16px;
                }

                .popup-content {
                    background-color: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                                0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    padding: 48px;
                    text-align: center;
                    max-width: 448px;
                    width: 100%;
                    transform: scale(0.95);
                }

                .popup-close-button {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    color: #9ca3af;
                    font-size: 32px;
                    font-weight: 700;
                    border: none;
                    background: none;
                    cursor: pointer;
                    outline: none;
                }

                .popup-close-button:hover {
                    color: #4b5563;
                }

                .popup-text-main {
                    font-size: 36px;
                    font-weight: 800;
                    color: #9333ea;
                    margin-bottom: 24px;
                }

                .popup-text-sub {
                    font-size: 24px;
                    color: #374151;
                    margin-bottom: 24px;
                }

                .next-page-button, .go-back-button {
                    background-color: #6a0dad;
                    color: #ffffff;
                    font-weight: 700;
                    padding: 12px 24px;
                    border-radius: 9999px;
                    border: none;
                    cursor: pointer;
                    font-size: 18px;
                }

                .next-page-button:hover, .go-back-button:hover {
                    background-color: #5a009d;
                }

                .next-page-container {
                    background-color: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                                0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    padding: 48px;
                    text-align: center;
                    max-width: 576px;
                    width: 100%;
                }

                .next-page-title {
                    font-size: 48px;
                    font-weight: 800;
                    color: #6a0dad;
                    margin-bottom: 24px;
                }

                .next-page-text {
                    font-size: 24px;
                    color: #374151;
                    margin-bottom: 32px;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }

                .animate-zoom-in {
                    animation: zoomIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Page1;
