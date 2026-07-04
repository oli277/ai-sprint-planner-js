import React, { useState } from 'react';
import { FaWandMagicSparkles, FaArrowRight, FaRegLightbulb } from 'react-icons/fa6';

export default function PromptInput({ searchQuery, setSearchQuery }) {
  const [isGenerating, setIsGenerating] = useState(false);


  return (
    <div className="flex flex-col items-center text-center w-full mt-4">
      <form 
        className="w-full max-w-3xl flex items-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 border border-gray-100 transition-all focus-within:shadow-md focus-within:border-blue-300"
      >
        <div className="pl-4 pr-2 text-blue-500">
          <FaRegLightbulb className="text-xl" />
        </div>

        <input
          type="text"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="find a team..."
          className="flex-1 bg-transparent py-3 px-2 outline-none text-gray-700 placeholder-gray-400 text-lg"
          disabled={isGenerating}
        />

        <button
          type="submit"
          disabled={isGenerating || !searchQuery.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors duration-200"
        >
          {isGenerating ? 'searching...' : 'search'}
          {!isGenerating && <FaArrowRight />}
        </button>
      </form>
    </div>
  );
}