import React, { useState, useEffect } from 'react';
import TeamsPage from '../teams/teamsPage';
import Search from '../teams/searchTeams';

function TeamPage() {
  
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:5000/teams');
        if (!response.ok) throw new Error('Failed to fetch teams');
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error loading templates: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []); 

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-[#f8f9fc] font-sans text-gray-800">
      <div className="flex-1 flex flex-col items-center overflow-y-auto py-16 px-8">
        <div className="w-full max-w-4xl flex flex-col gap-12">
          

          <Search 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          
       
          <TeamsPage 
            templates={filteredTeams} 
            isLoading={isLoading} 
          />
          
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
