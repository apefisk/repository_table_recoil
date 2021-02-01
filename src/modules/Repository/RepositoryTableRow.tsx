import React from "react";
import IRepository from "common/interfaces/IRepository";

export default function RepositoryTableRow({
  name,
  description,
  homepage,
  openIssues,
  stargazersCount,
}: IRepository) {
  const openUrl = () => {
    window.open(homepage, "_blank");
  };

  return (
    <div className="table_row" key={homepage}>
      <div className="table_name">{name}</div>
      <div>{description}</div>

      <div>
        <div className="table_label">Open issues:</div> {openIssues}
      </div>

      <div>
        <div className="table_label">Stargazers count:</div> {stargazersCount}
      </div>

      <div className="table_arrow">
        <button className="table_redirect" type="button" onClick={openUrl}>
          &#8250;
        </button>
      </div>
    </div>
  );
}
