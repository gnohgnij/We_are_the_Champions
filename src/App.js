import React, { useEffect, useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [toggle, setToggle] = useState(false);
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [teams, setTeams] = useState("");
  const [matches, setMatches] = useState("");

  /**
   * Executes whenever there is a change in the team/match info
   */
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3000/api/team");
      let json = await res.json();
      setGroup1(json.teams.filter((team) => parseInt(team.group) === 1));
      setGroup2(json.teams.filter((team) => parseInt(team.group) === 2));
    };
    fetchData();
  }, [toggle]);

  /**
   * Change function for team info input
   * @param {*} event
   */
  const handleOnTeamChange = (event) => {
    setTeams(event.target.value);
  };

  /**
   * Submit function for team info input
   * @param {*} event
   */
  const handleOnTeamSubmit = async (event) => {
    event.preventDefault();

    let allTeams = [];
    let input = teams.split(/\r?\n/);
    input.forEach((line) => {
      let info = line.split(" ");
      let team = {
        name: info[0],
        registeredDate: info[1],
        group: info[2],
      };
      allTeams.push(team);
    });

    let res = await fetch("http://localhost:3000/api/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teams: allTeams }),
    });

    setTeams("");
    setToggle(!toggle);
  };

  /**
   * Change function for match info input
   * @param {*} event
   */
  const handleOnMatchChange = (event) => {
    setMatches(event.target.value);
  };

  /**
   * Submit function for match info input
   * @param {*} event
   */
  const handleOnMatchSubmit = async (event) => {
    event.preventDefault();

    let allMatches = [];
    let input = matches.split(/\r?\n/);
    input.forEach((line) => {
      let info = line.split(" ");
      let match = {
        teamA: info[0],
        teamB: info[1],
        goalsA: info[2],
        goalsB: info[3],
      };
      allMatches.push(match);
    });

    await fetch("http://localhost:3000/api/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matches: allMatches }),
    });

    setMatches("");
    setToggle(!toggle);
  };

  /**
   * Function to delete all records
   */
  const deleteAll = async () => {
    await fetch("http://localhost:3000/api/match", {
      method: "DELETE",
    });

    await fetch("http://localhost:3000/api/team", {
      method: "DELETE",
    });

    setToggle(!toggle);
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl text-center">We are the Champions</h1>
      <div id="forms" className="grid grid-cols-1">
        <Form
          onChange={handleOnTeamChange}
          value={teams}
          onSubmit={handleOnTeamSubmit}
        />
        <Form
          onChange={handleOnMatchChange}
          value={matches}
          onSubmit={handleOnMatchSubmit}
        />
      </div>
      <div id="tables" className="grid grid-cols-1 mt-10">
        <Table group={1} teams={group1} />
        <Table group={2} teams={group2} />
      </div>
      <button
        className="rounded-md bg-lime-500 p-2 place-self-center text-white mt-2 w-full hover:bg-lime-800 cursor-pointer"
        onClick={deleteAll}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
