import React, { useEffect, useState } from "react";

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
        <td>{i + 1}</td>
        <td>{team.name}</td>
        <td>{team.registeredDate}</td>
        <td>{team.totalGoals ? team.totalGoals : 0}</td>
        <td>{team.points ? team.points : 0}</td>
        <td>{team.alternatePoints ? team.alternatePoints : 0}</td>
        <td>{i + 1 <= 4 ? "Yes" : "No"}</td>
      </tr>
    );
  });

  return (
    <>
      <h2 className="text-center text-2xl font-bold">{`Group ${props.group}`}</h2>
      <table className="table-auto">
        <tr className="bg-slate-300">
          <th>Rank</th>
          <th>Team</th>
          <th>Registration Date</th>
          <th>Goals</th>
          <th>Points</th>
          <th>Alternate Points</th>
          <th>Qualified?</th>
        </tr>
        {row}
      </table>
    </>
  );
};

export default Table;
