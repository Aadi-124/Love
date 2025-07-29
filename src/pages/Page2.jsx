// import React, { useState } from 'react';

// const Page2 = () => {
//   const noMessages = [
//     "No 💔", "Really? 😟", "Khrch nh Awdt? 😓", "As k mg? 🥺", "gmmt krtey n tu 😅",
//     "as Noko kru n 😭", "Plsss 🥺", "nhiiii 🙁",
//     "Love me n 😞", "Ekda yes bol n 😢", "You’re breaking my heart 💔","me pookie nh k mg tuza 🥺",
//   ];

//   const [noClickCount, setNoClickCount] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleNoClick = () => {
//     if (noClickCount < noMessages.length - 1) {
//       setNoClickCount(noClickCount + 1);
//     }
//   };

//   const handleYesClick = () => {
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   // Button scaling and movement calculations
//   const yesButtonScale = Math.pow(1.15, noClickCount); // grows gradually
//   const noButtonRight = Math.max(0, 20 - noClickCount * 2); // stops at 0%
//   const shouldHideNo = yesButtonScale >= 4.5 && noButtonRight === 0; // overlap trigger

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
//         body {
//           margin: 0;
//           font-family: 'Inter', sans-serif;
//         }
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           background: linear-gradient(to bottom right, #f3e8ff, #ffe8f3);
//           padding: 1rem;
//         }
//         .title {
//           font-size: 2.5rem;
//           font-weight: 800;
//           color: #2d3748;
//           margin-bottom: 3rem;
//           text-align: center;
//         }
//         .button-container {
//           position: relative;
//           width: 100%;
//           max-width: 600px;
//           height: 200px;
//         }
//         .button {
//           padding: 1rem 2rem;
//           border-radius: 9999px;
//           font-weight: 700;
//           transition: all 0.4s ease-in-out;
//           border: none;
//           cursor: pointer;
//         }
//         .yes-button {
//           position: absolute;
//           z-index: 10;
//           color: white;
//           background: linear-gradient(to right, #ec4899, #ef4444);
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         }
//         .no-button {
//           position: absolute;
//           z-index: 5;
//           color: #4a5568;
//           background-color: #e2e8f0;
//           top: 50%;
//           transition: all 0.4s ease-in-out;
//           transform: translateY(-50%);
//         }
//         .popup-overlay {
//           position: fixed;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 50;
//         }
//         .popup-content {
//           background: white;
//           border-radius: 0.75rem;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//           padding: 2rem;
//           text-align: center;
//           animation: fadeIn 0.3s ease-out;
//         }
//         .popup-close-button {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           background: none;
//           border: none;
//           font-size: 1.5rem;
//           cursor: pointer;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <div className="container">
//         <h1 className="title">Do you love me? 😚💓</h1>

//         <div className="button-container">
//           <button
//             onClick={handleYesClick}
//             className="button yes-button"
//             style={{
//               transform: `translate(-50%, -50%) scale(${yesButtonScale})`
//             }}
//           >
//             Yes 💘
//           </button>

//           <button
//             onClick={handleNoClick}
//             className="button no-button"
//             style={{
//               right: `${noButtonRight}%`,
//               opacity: shouldHideNo ? 0 : 1,
//               pointerEvents: shouldHideNo ? 'none' : 'auto'
//             }}
//           >
//             {noMessages[noClickCount]}
//           </button>
//         </div>

//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup-content">
//               <button onClick={closePopup} className="popup-close-button">&times;</button>
//               <h2>Thank You Golee 😁</h2>
//               <p>MAz Pillu 🥺💖</p>
//               <p style={{ fontStyle: 'italic', color: '#6b7280' }}>Chala mg ata tu yevdhya dur alich ahes tr tuzya sathi ek chotusa gift 😅😁</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Page2;



import React, { useState } from 'react';

const Page2 = () => {
  // Array of messages to display when the "No" button is clicked
  const noMessages = [
    "No 💔", "Really? 😟", "Khrch nh Awdt? 😓", "As k mg? �", "gmmt krtey n tu 😅",
    "as Noko kru n 😭", "Plsss 🥺", "nhiiii 🙁",
    "Love me n 😞", "Ekda yes bol n 😢", "You’re breaking my heart 💔","me pookie nh k mg tuza 🥺",
  ];

  // State to track the number of times the "No" button has been clicked
  const [noClickCount, setNoClickCount] = useState(0);
  // State to control the visibility of the "Yes" popup
  const [showPopup, setShowPopup] = useState(false);

  // Handler for "No" button click
  const handleNoClick = () => {
    // Increment the click count if there are more "No" messages to display
    if (noClickCount < noMessages.length - 1) {
      setNoClickCount(noClickCount + 1);
    }
  };

  // Handler for "Yes" button click
  const handleYesClick = () => {
    setShowPopup(true); // Show the popup when "Yes" is clicked
  };

  // Handler to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Button scaling and movement calculations
  const yesButtonScale = Math.pow(1.15, noClickCount); // grows gradually
  const noButtonRight = Math.max(0, 20 - noClickCount * 2); // stops at 0%
  const shouldHideNo = yesButtonScale >= 4.5 && noButtonRight === 0; // overlap trigger

  return (
    <>
      {/* Custom CSS styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to bottom right, #f3e8ff, #ffe8f3);
          padding: 1rem;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2d3748;
          margin-bottom: 3rem;
          text-align: center;
        }
        .button-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 200px;
        }
        .button {
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          transition: all 0.4s ease-in-out;
          border: none;
          cursor: pointer;
        }
        .yes-button {
          position: absolute;
          z-index: 10;
          color: white;
          background: linear-gradient(to right, #ec4899, #ef4444);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(${yesButtonScale});
        }
        .no-button {
          position: absolute;
          z-index: 5;
          color: #4a5568;
          background-color: #e2e8f0;
          top: 50%;
          transition: all 0.4s ease-in-out;
          transform: translateY(-50%);
        }
        .popup-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }
        .popup-content {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          padding: 2rem;
          text-align: center;
          animation: fadeIn 0.3s ease-out;
          position: relative; /* Added for close button positioning */
        }
        .popup-close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280; /* Added color for visibility */
        }
        .popup-close-button:hover {
          color: #4b5563; /* Added hover color */
        }
        .popup-action-button { /* New style for the button in popup */
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(to right, #ec4899, #ef4444);
          color: white;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .popup-action-button:hover {
          background: linear-gradient(to right, #db2777, #dc2626);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container">
        <h1 className="title">Do you love me? 🤭💓</h1>

        <div className="button-container">
          <button
            onClick={handleYesClick}
            className="button yes-button"
            style={{
              transform: `translate(-50%, -50%) scale(${yesButtonScale})`
            }}
          >
            Yes 💘
          </button>

          <button
            onClick={handleNoClick}
            className="button no-button"
            style={{
              right: `${noButtonRight}%`,
              opacity: shouldHideNo ? 0 : 1,
              pointerEvents: shouldHideNo ? 'none' : 'auto'
            }}
          >
            {noMessages[noClickCount]}
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button onClick={closePopup} className="popup-close-button">&times;</button>
                <h2>Thank You Golee 😁</h2>
          <p>Maz Pillu 🥺💖</p>
              <p style={{ fontStyle: 'italic', color: '#6b7280' }}></p>
              {/* New button added to the popup */}
              <a href="https://drive.google.com/file/d/1b800TsChGBX00tM7JudoNsFSjpZJ3XUS/view?usp=drive_link" target='_blank'>
              <button onClick={closePopup} className="popup-action-button">
               Chala mg ata tu yevdhya dur alich ahes tr tuzya sathi ek chotusa gift 😅😁
              </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page2;