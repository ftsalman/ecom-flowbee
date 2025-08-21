import React, { useState, useEffect } from "react";

const PriceRange = ({ min = 0, max = 5000, step = 100, onChange }) => {
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  useEffect(() => {
    onChange?.(from, to);
  }, [from, to]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    const val = parseInt(value) || 0;

    if (name === "from") {
      setFrom(Math.min(val, to));
    } else {
      setTo(Math.max(val, from));
    }
  };

  const handleSlider = (type, val) => {
    const value = parseInt(val);
    if (type === 0) {
      setFrom(Math.min(value, to));
    } else {
      setTo(Math.max(value, from));
    }
  };

  const trackStyle = {
    left: `${((from - min) / (max - min)) * 100}%`,
    width: `${((to - from) / (max - min)) * 100}%`,
  };

  return (
    <div className="space-y-2">
      {/* Input fields */}
      <div className="flex gap-2">
        <input
          type="number"
          name="from"
          value={from}
          onChange={handleInput}
          className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
        />
        <input
          type="number"
          name="to"
          value={to}
          onChange={handleInput}
          className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
        />
      </div>

      {/* Slider */}
      <div className="relative h-6 mt-2">
        {/* Inactive track */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full rounded bg-gray-300" />
        {/* Active track */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-black rounded"
          style={trackStyle}
        />

        {/* From slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={from}
          onChange={(e) => handleSlider(0, e.target.value)}
          className="range-thumb absolute w-full appearance-none z-10 bg-transparent"
        />

        {/* To slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={to}
          onChange={(e) => handleSlider(1, e.target.value)}
          className="range-thumb absolute w-full appearance-none z-20 bg-transparent"
        />
      </div>

      {/* Custom slider styling */}
      <style jsx>{`
        .range-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
          background: black;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px;
        }
        .range-thumb::-moz-range-thumb {
          height: 14px;
          width: 14px;
          background: black;
          border-radius: 50%;
          cursor: pointer;
        }
        .range-thumb::-ms-thumb {
          height: 14px;
          width: 14px;
          background: black;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PriceRange;
