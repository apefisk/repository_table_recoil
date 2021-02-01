import { atom, selector } from "recoil";

// Increments by offset * paginationOffset
export const repositoryIndex = atom({
  key: "repositoryIndex",
  default: 0,
});

const getCurrentRepositories = selector({
  key: "getCurrentRepositories",
  get: async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
      );

      const data = await res.json();
      return data.items;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
});

export default getCurrentRepositories;
