import React, { useState, useEffect } from "react";
import {
  FaWandMagicSparkles,
  FaArrowRight,
  FaRegLightbulb,
} from "react-icons/fa6";

export default function PromptInput() {
  const [promptText, setPromptText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [teams, setTeams] = useState([]);
  const [joined, setJoined] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const get = await fetch("http://localhost:5000/teams");
        if (!get.ok) throw new Error("Failed to fetch teams");
        const data = await get.json();

        setTeams(data);
      } catch (error) {
        console.error("Error loading teams: ", error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchJoined = async () => {
      try {
        const get = await fetch("http://localhost:5000/joinedTeams");
        if (!get.ok) throw new Error("Failed to fetch joined teams");
        const data = await get.json();

        setJoined(data);
      } catch (error) {
        console.error("Error loading joined teams: ", error);
      }
    };

    fetchJoined();
  }, []);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const get = await fetch("http://localhost:5000/pendingInvites");
        if (!get.ok) throw new Error("Failed to fetch pending requests");
        const data = await get.json();

        setPending(data);
      } catch (error) {
        console.error("Error loading joined teams: ", error);
      }
    };

    fetchPending();
  }, []);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    

    

    const teamExists = teams.some(
      (team) => team.inviteCode === promptText.trim(),
    );
    const teamJoined = joined.some(
      (team) => team.inviteCode === promptText.trim(),
    );
    const teamRequested = pending.some(
      (team) => team.inviteCode === promptText.trim(),
    );

    if (!teamExists) {
      console.error("Error, no team with this code");
      return;
    }
    if (teamJoined || teamRequested) {
      console.error("Team already joined or requested");
      return;
    }

    setIsGenerating(true);

    const requestedTeam = teams.find((team) => team.inviteCode === promptText.trim())

    try {
      const send = await fetch("http://localhost:5000/pendingInvites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedTeam),
      });

      if (!send.ok) {
        throw new Error(`HTTP error! status: ${send.status}`);
      }
      setPromptText("");
    } catch (error) {
      console.error("Error, failed to send request: ", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center w-full mt-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Invite team
      </h1>

      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
        Insert team invitaion code and wait until they accept it
      </p>

      <form
        onSubmit={handleGenerate}
        className="w-full max-w-3xl flex items-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 border border-gray-100 transition-all focus-within:shadow-md focus-within:border-blue-300"
      >
        <div className="pl-4 pr-2 text-blue-500">
          <FaRegLightbulb className="text-xl" />
        </div>

        <input
          type="text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          placeholder="team code"
          className="flex-1 bg-transparent py-3 px-2 outline-none text-gray-700 placeholder-gray-400 text-lg"
          disabled={isGenerating}
        />

        <button
          type="submit"
          disabled={isGenerating || !promptText.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors duration-200"
        >
          {isGenerating ? "sending request..." : "send request"}
          {!isGenerating && <FaArrowRight />}
        </button>
      </form>
    </div>
  );
}
