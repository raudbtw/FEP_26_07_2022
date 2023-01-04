import React from "react";

export const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>BIO</th>
          <th>Followers</th>
          <th>Follows</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              ></img>
            )}
          </td>
          <td>{data.bio}</td>
          <td>{data.followers}</td>
          <td>{data.following}</td>
          <td>
            {repositories.slice(0, 5).map((repo) => (
              <div className="ui relaxrd divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                    Fork:{repo.forks}
                    <br></br>
                    Issues:{repo.open_issues_count}
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
