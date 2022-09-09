import "./App.css";

function App() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl text-center">We are the Champions</h1>
      <div id="forms" className="grid grid-cols-1">
        <form className="mt-6">
          <textarea
            className="outline outline-slate-500 rounded-md p-2 block w-full"
            placeholder="Enter team information here"
            rows={5}
          ></textarea>
          <input
            className="rounded-md bg-lime-500 p-2 place-self-center text-white mt-2 w-full hover:bg-lime-800 cursor-pointer"
            type="submit"
          />
        </form>
        <form className="mt-6">
          <textarea
            className="outline outline-slate-500 rounded-md p-2 block w-full"
            placeholder="Enter match results here"
            rows={5}
          ></textarea>
          <input
            className="rounded-md bg-lime-500 p-2 place-self-center text-white mt-2 w-full hover:bg-lime-800 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
      <div id="tables" className="grid grid-cols-1 mt-10">
        <h2 className="text-center font-bold text-2xl">Group A</h2>
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
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Registration Date</th>
            <th>Goals</th>
            <th>Points</th>
            <th>Alternate Points</th>
            <th>Qualified?</th>
          </tr>
        </table>
        <h2 className="text-center font-bold text-2xl mt-10">Group B</h2>
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
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Registration Date</th>
            <th>Goals</th>
            <th>Points</th>
            <th>Alternate Points</th>
            <th>Qualified?</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
