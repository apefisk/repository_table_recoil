import React from "react";
import { RecoilRoot } from "recoil";
import "./styles/main.scss";
import RepositoryTable from "./modules/Repository/RepositoryTable";

export default function App() {
  return (
    <div className="app">
      <RecoilRoot>
        <RepositoryTable />
      </RecoilRoot>
    </div>
  );
}
