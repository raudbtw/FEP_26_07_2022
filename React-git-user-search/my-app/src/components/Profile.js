import React, { useState } from "react";
import { DisplayTable } from "./DisplayTable";

export const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const profile = await fetch(` https://api.github.com/users/${username}`);
    const profileJSON = await profile.json();
    const repositories = await fetch(profileJSON.repos_url);
    const repoJSON = await repositories.json();
    console.log(profileJSON);
    console.log(repoJSON);

    if (profileJSON) {
      setData(profileJSON);
      setRepositories(repoJSON);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search user name..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            ></input>
          </div>
          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
        </div>
        <DisplayTable data={data} repositories={repositories} />
      </div>
    </>
  );
};
