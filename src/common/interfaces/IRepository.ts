/* eslint-disable camelcase */
// Interface based on the object keys from repository API

export default interface IRepository {
  name?: string;
  owner?: Record<string, string>;
  description?: string;
  homepage?: string;
  openIssues?: number;
  stargazersCount?: number;
}
