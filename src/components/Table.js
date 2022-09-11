import React, { useEffect, useState } from "react";

/**
 * Compares teams based on points, total goals, alternate points and earliest registered date
 * @param {team object} a
 * @param {team object} b
 * @returns higher ranked team
 */
const compare = (a, b) => {
  if (a.points < b.points) {
    return 1;
  } else if (a.points > b.points) {
    return -1;
  } else {
    if (a.totalGoals < b.totalGoals) {
      return 1;
    } else if (a.totalGoals > b.totalGoals) {
      return -1;
    } else {
      if (a.alternatePoints < b.alternatePoints) {
        return 1;
      } else if (a.alternatePoints > b.alternatePoints) {
        return -1;
      } else {
        let aDate = a.registeredDate.split("/");
        let bDate = b.registeredDate.split("/");
        if (aDate[1] > bDate[1]) return 1;
        else if (aDate[1] < bDate[1]) return -1;
        else {
          if (aDate[0] > bDate[0]) return 1;
          else if (aDate[0] < bDate[0]) return -1;
        }
      }
    }
  }
};

const Table = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let arr = props.teams;
    arr.sort(compare);
    setData(arr);
  }, [props.teams]);

  let row = data.map((team, i) => {
    return (
      <tr key={i}>
        <td className="text-center">{i + 1}</td>
        <td className="text-center">{team.name}</td>
        <td className="text-center">{team.registeredDate}</td>
        <td className="text-center">{team.totalGoals}</td>
        <td className="text-center">{team.points}</td>
        <td className="text-center">{team.alternatePoints}</td>
        <td className="text-center">{i + 1 <= 4 ? "Yes" : "No"}</td>
      </tr>
    );
  });

  return (
    <>
      <h2 className="text-center text-2xl font-bold">{`Group ${props.group}`}</h2>
      <table className="table-auto">
        <thead>
          <tr className="bg-slate-300">
            <th>Rank</th>
            <th>Team</th>
            <th>Registration Date</th>
            <th>Goals</th>
            <th>Points</th>
            <th>Alternate Points</th>
            <th>Qualified?</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </>
  );
};

export default Table;
