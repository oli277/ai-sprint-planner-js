import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Importing your page components
import AI from "./components/pages/ai";
import Invite from "./components/pages/invite";
import Login from "./components/pages/login";
import Resister from "./components/pages/register";
import Home from "./components/pages/home";

function RouteFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
      <p className="font-sans text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

function App() {
  return (
    // BrowserRouter wraps everything that needs to use routing
    <BrowserRouter>
      {/* Suspense is here to show your RouteFallback if components take time to load */}
      <Suspense fallback={<RouteFallback />}>
        {/* Routes acts as a switch, looking through its children to find a match */}
        <Routes>
          {/* Your requested routes */}
          <Route path="/ai" element={<AI />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resister />} />

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Optional: A catch-all route that redirects to /ai if the user visits the root (/) or an unknown URL */}
          {/* <Route path="*" element={<Navigate to="/Home" />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
