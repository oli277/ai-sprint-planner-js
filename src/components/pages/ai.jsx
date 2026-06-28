import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import Sidebar from '../ai/Sidebar';
import PromptInput from '../ai/PromptInput';
import TemplateCards from '../ai/TemplateCards';
import RecentGenerations from '../ai/RecentGenerations';



function RouteFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
      <p className="font-sans text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

function AIpage() {
  return (
    <div className="flex h-screen w-full bg-[#f8f9fc] font-sans text-gray-800">
      
      {/* THE SIDEBAR AREA */}
      <div className="w-[260px] bg-white border-r border-gray-200 flex-shrink-0">
        <Sidebar />
      </div>

      {/* THE MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center overflow-y-auto py-16 px-8">
        
        {/* CONTENT CONTAINER */}
        <div className="w-full max-w-4xl flex flex-col gap-12">
          
          <PromptInput />
          <TemplateCards />
          <RecentGenerations />
          
        </div>

      </div>

    </div>
  );
}

export default AIpage;