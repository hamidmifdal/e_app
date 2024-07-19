// components/Clothing.js

"use client";

import { useState } from 'react';
import { Card } from '@/index'; // Ensure this path is correct

export default function Clothing({ items }) {
  const [filter, setFilter] = useState('tshirt'); // Default filter

  // Filter items based on the selected category
  const filteredItems = items.filter(item => item.category === filter);

  return (
    <div className="container mx-auto py-7 px-3 md:px-0">
      <h1 className="text-2xl font-light">Clothing</h1>
      <div className="flex flex-row gap-4 mt-5 overflow-auto">
        <button 
          className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200"
          onClick={() => setFilter('tshirt')}
        >
          Tshirt
        </button>
        <button 
          className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200"
          onClick={() => setFilter('totebag')}
        >
          Seatshirt
        </button>
        <button 
          className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200"
          onClick={() => setFilter('Hoodies')}
        >
          Hoodies
        </button>
        <button 
          className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200"
          onClick={() => setFilter('totebag')}
          >
          Totebag
        </button>
      </div>
      <Card db={filteredItems} />
    </div>
  );
}
