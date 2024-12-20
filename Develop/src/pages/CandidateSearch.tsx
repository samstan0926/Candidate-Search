import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      let candidate = await searchGithub();
      let username = candidate.login;
      console.log(username);
      let userData = await searchGithubUser(username);
      console.log(userData);
      setCandidate(candidate);
      setUserData(userData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>CandidateSearch</h1>
      {candidate && <div>Candidate: {candidate.login}</div>}
      {userData && <div>User Data: {JSON.stringify(userData)}</div>}
    </div>
  );
};

export default CandidateSearch;
