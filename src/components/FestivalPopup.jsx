import React, { useState, useEffect } from "react";
import { festivalData } from "../utils/festivalData";
import Confetti from "react-confetti";

export default function FestivalPopup() {
  const [festival, setFestival] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayDate = `${month}-${day}`;

    const todayFestival = festivalData.find((f) => f.date === todayDate);

    if (todayFestival) {
      setFestival(todayFestival);
      setShowConfetti(true);

      // stop confetti after 3s
      setTimeout(() => setShowConfetti(false), 5000);

      // AUTO-HIDE POPUP after 5 seconds
      setTimeout(() => setFestival(null), 10000);
    }
  }, []);

  if (!festival) return null;

  return (
    <>
      {showConfetti && <Confetti numberOfPieces={120} gravity={0.3} />}

      <div className="fixed bottom-6 right-6 z-[9999] animate-slideIn">
        <div className="relative bg-white p-4 rounded-3xl shadow-xl w-[260px] border-2 border-transparent glow-border">

          <div className="sparkle-layer pointer-events-none"></div>

          <button
            onClick={() => setFestival(null)}
            className="absolute -top-2 -right-2 bg-white shadow-md text-gray-600 hover:text-black rounded-full w-7 h-7 flex items-center justify-center"
          >
            ✖
          </button>

          <img
            src={festival.image}
            alt={festival.name}
            className="rounded-2xl w-full h-32 object-cover mb-3"
          />

          <h2 className="text-center text-base font-semibold text-gray-800 mb-1">
            {festival.message}
          </h2>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% { transform: translate(80px, 80px); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }

        .glow-border {
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 8px rgba(255, 215, 0, 0.4); }
          100% { box-shadow: 0 0 16px rgba(255, 215, 0, 0.9); }
        }

        /*.sparkle-layer::before, 
        .sparkle-layer::after {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          width: 280px;
          height: 180px;
          background-image: radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px);
          background-size: 18px 18px;
          opacity: 0.6;
          animation: sparkleMove 6s linear infinite;
        }

        .sparkle-layer::after {
          animation-duration: 8s;
          opacity: 0.4;
        }

        @keyframes sparkleMove {
          0% { transform: translate(0px, 0px); }
          100% { transform: translate(40px, -40px); }
        }*/
      `}</style>
    </>
  );
}
