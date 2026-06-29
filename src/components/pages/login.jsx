import React from 'react';
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import LogIn from '../login/loginPage';




function RouteFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
      <p className="font-sans text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

function LogInPage() {
  return (
    <div className="flex h-screen w-full bg-[#f8f9fc] font-sans text-gray-800">
      
     

      
      <div className="flex-1 flex flex-col items-center overflow-y-auto py-16 px-8">
        
       
        <div className="w-full max-w-4xl flex flex-col gap-12">
          
          <LogIn />
        
          
        </div>

      </div>

    </div>
  );
}

export default LogInPage;