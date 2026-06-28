import React, { useState, useEffect } from "react";

export default function LoginForm() {
  const [emailIn, setEmailIn] = useState("");
  const [pass, setpass] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const get = await fetch("http://localhost:5000/users");
        if (!get.ok) throw new Error("Failed to fetch users");
        const data = await get.json();

        setUsers(data);
      } catch (error) {
        console.error("Error loading users: ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!emailIn.trim() || !pass.trim()) return;
    setIsLoading(true)

    const userCorrect = users.some(
      (user) => user.email === emailIn.trim() && user.password === pass.trim(),
    );

   userCorrect ? console.log('Successful login') && setWarningMsg('Succesful Login') : console.error('Login failed, wrong credentials') && setWarningMsg('Login failed, wrong email or password');
   setIsLoading(false)
   setEmailIn('')
   setpass('')
  
   
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4 font-sans text-gray-900">
      <div className="w-full max-w-[400px]">
        {/* Header & Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-6">
            <svg
              className="w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C18.8954 4 21.551 5.02701 23.6334 6.72145"
                stroke="#0052FF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 20L13.784 18.216M19.4142 10.5858C20.9763 9.02369 21.5 7 21.5 7C21.5 7 19.4763 7.52369 17.9142 9.08579C16.4883 10.5117 16.0357 12.5458 16.4674 14.4173L12 18.8847C11.6095 19.2752 11.6095 19.9084 12 20.2989L12.7011 21C13.0916 21.3905 13.7248 21.3905 14.1153 21L18.5827 16.5326C20.4542 16.9643 22.4883 16.5117 23.9142 15.0858Z"
                fill="#0052FF"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 22C10 22 8 22.5 7 24C8.5 23 9 21 9 21"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5 7L27 10L25 11"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[22px] font-bold tracking-tight text-[#0052FF]">
              Sprintify
            </span>
          </div>
          <h1 className="text-[26px] font-medium text-gray-900 mb-1">
            Welcome back!
          </h1>
          <p className="text-[15px] text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-gray-700 underline hover:text-gray-900 transition-colors"
            >
              Signup
            </a>
          </p>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={handleLogin}
        >
          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-gray-500 ml-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </div>
              <input
                id="email"
                type="email"
                value={emailIn}
                onChange={(e) => setEmailIn(e.target.value)}
                disabled={isLoading}
                className="w-full pl-11 pr-4 py-2.5 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px] text-gray-700 bg-transparent placeholder-gray-400 transition-shadow"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5 mb-1">
            <label
              className="text-[13px] text-gray-500 ml-1"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  ></path>
                </svg>
              </div>
              <input
                id="password"
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                disabled={isLoading}
                className="w-full pl-11 pr-11 py-2.5 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[14px] text-gray-700 bg-transparent placeholder-gray-400 transition-shadow"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!pass.trim() || !emailIn.trim()}
            className="w-full py-2.5 mt-2 bg-transparent border border-[#0052FF] text-[#0052FF] font-medium text-[15px] rounded-full hover:bg-blue-50 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-[11px] text-gray-400 uppercase tracking-wide">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#F1F3F6] rounded-full hover:bg-gray-200 transition-colors text-[14px] font-medium text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            Google
          </button>

          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#F1F3F6] rounded-full hover:bg-gray-200 transition-colors text-[14px] font-medium text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            Github
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-[13px] text-gray-500 text-center">
          By using our platform, you agree to our{" "}
          <a
            href="#"
            className="text-gray-600 underline hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </a>
          
        </p>

      </div>
    
    </div>
  );
}
