// import React, { Suspense } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


// import AI from "./components/pages/ai";
// import Invite from "./components/pages/invite";
// import Login from "./components/pages/login";
// import Resister from "./components/pages/register";
// import Home from "./components/pages/home";
// import Team from "./components/pages/teams";
// import Sidebar from './components/ai/Sidebar';

// function RouteFallback() {
//   return (
//     <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
//       <p className="font-sans text-sm text-muted-foreground">Loading…</p>
//     </div>
//   );
// }

// function App() {
//   return (
    
    
//     <BrowserRouter>
      
//       <Suspense fallback={<RouteFallback />}>
      
        
//         <Routes>
          
//           <Route path="/ai" element={<AI />} />
//           <Route path="/invite" element={<Invite />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Resister />} />
//           <Route path="/teams" element={<Team />} />

//           <Route path="/" element={<Home />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/home" element={<Home />} />
          
          
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import AI from "./components/pages/ai";
import Invite from "./components/pages/invite";
import Login from "./components/pages/login";
import Resister from "./components/pages/register";
import Home from "./components/pages/home";
import Team from "./components/pages/teams";


import Sidebar from './components/ai/Sidebar'; 
import ThemeToggle from './components/ThemeToggle'; // 1. Import your floating button

function RouteFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
      <p className="font-sans text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/ai" element={<AI />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Resister />} />
            <Route path="/teams" element={<Team />} />

            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>

        <ThemeToggle />
        
      </div>
    </BrowserRouter>
  );
}

export default App;