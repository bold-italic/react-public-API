// Builds a search form for NBA dataset via public API
// and display search results below the form.

import "./styles.css";
import React, { useState } from "react";
import useDataFetch from "./useDataFetch";
import ToggleButton from "./ToggleButton";
import "mvp.css";

export default function App() {
  const [query, setNewQuery] = useState("");

  const [{ data }, setUrl] = useDataFetch(
    { data: [] },

    "https://www.balldontlie.io/api/v1/players/?per_page=100&search="
  );

  return (
    <div className="App">
      <h1>NBA Players</h1>
      <form
        onSubmit={(event) => {
          setUrl(
            "https://www.balldontlie.io/api/v1/players/?per_page=100&search=" +
              query
          );
          event.preventDefault();
        }}
      >
        <label value="Enter the player's name"></label>
        <input
          type="text"
          placeholder="Enter your player..."
          value={query}
          onChange={(e) => setNewQuery(e.target.value)}
        />
        <ToggleButton />
      </form>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Team Name</th>
            <th>City</th>
            <th>Conference</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item) => (
            <tr key={item.id}>
              <td>
                {item.first_name} {item.last_name}
              </td>
              <td>{item.team.full_name}</td>
              <td>{item.team.city}</td>
              <td>{item.team.conference}</td>
              <td>{item.team.division}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="records">Total number of records: {data.data.length}</div>
    </div>
  );
}
