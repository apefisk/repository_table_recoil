import IRepository from "common/interfaces/IRepository";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapITableToRepository = (item: any) => {
  const repository: IRepository = {
    name: item.name,
    owner: item.owner,
    description: item.description,
    homepage: item.homepage,
    openIssues: item.open_issues,
    stargazersCount: item.stargazers_count,
  };

  return repository;
};

export default mapITableToRepository;
