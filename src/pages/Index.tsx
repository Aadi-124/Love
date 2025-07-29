import React from 'react';
import { useNavigate } from 'react-router-dom'; // Removed as it's not used and causes an error without a Router context

const Index = () => {
  const navigate = useNavigate(); // Removed as it's not used and causes an error without a Router context

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 dark:bg-gray-900 font-inter p-4">
      <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-400 mb-6 leading-tight">
          Ghe g bai Gift Ready ahe Tuz! 😁
        </h1>
        <p className="text-lg md:text-4xl text-gray-700 dark:text-gray-300 mb-8">
        Fkt ata mhnu nko ki gift dila nhi mhanun 🥱
        </p>
        <button onClick={()=>{navigate("/page1")}} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700">
          Kr n Click hsn zhala asel tr 🤭
        </button>
      </div>
    </div>
  );
};

export default Index;
