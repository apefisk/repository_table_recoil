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
    <div className="table--row" key={homepage}>
      <div className="table--name">{name}</div>
      <div>{description}</div>

      <div>
        <div className="table--label">Open issues:</div> {openIssues}
      </div>

      <div>
        <div className="table--label">Stargazers count:</div> {stargazersCount}
      </div>

      <div className="table--arrow">
        <button className="table--redirect" type="button" onClick={openUrl}>
          &#8250;
        </button>
      </div>
    </div>
  );
}
