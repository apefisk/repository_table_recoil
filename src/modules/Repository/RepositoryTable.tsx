import React from "react";
import shortid from "shortid";
import { useRecoilValueLoadable, useRecoilState } from "recoil";

import getRepositories, {
  repositoryIndex,
} from "api/repository/getRepositories";
import usePagination from "hooks/pagination/usePagination";
import checkRecoilLoadable from "utils/recoil/checkRecoilLoadable";
import mapITableToIRepository from "utils/mapping/mapITableToIRepository";
import Spinner from "components/Spinner/Spinner";
import Error from "components/Error/Error";
import { BoldText } from "components/Text";
import OFFSET from "constants/pagination";
import RepositoryTableRow from "./RepositoryTableRow";
import "./RepositoryTable.scss";

export default function RepositoryTable() {
  const {
    getPaginatedItems,
    disableNextButton,
    disablePreviousButton,
  } = usePagination();
  const [index, setIndex] = useRecoilState(repositoryIndex);

  const data = useRecoilValueLoadable(getRepositories);
  const { loading, contents, error } = checkRecoilLoadable(data);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const tableHeaders = (
    <div className="table_header">
      <BoldText>Name</BoldText>
      <BoldText>Description</BoldText>
      <BoldText className="table_icon">Issues</BoldText>
      <BoldText className="table_icon">Stargazers</BoldText>
    </div>
  );

  const rangeComponent = (
    <div>
      Items: {index * OFFSET} - {!index ? OFFSET : OFFSET * (index + 1)}
    </div>
  );

  const paginatedItems = getPaginatedItems(contents, index);
  const fetchNextRows = () => {
    if (index + 1 <= (contents.length - 1) / OFFSET) setIndex(index + 1);
  };

  const tableItems = paginatedItems.map((item) => {
    const mappedItem = mapITableToIRepository(item);

    return <RepositoryTableRow key={shortid.generate()} {...mappedItem} />;
  });

  return (
    <div className="table">
      {tableHeaders}
      {tableItems}

      <div className="table--navigation">
        {rangeComponent}
        <div className="table--actions">
          <button
            disabled={disablePreviousButton(index)}
            type="button"
            onClick={() => setIndex(index - 1)}
          >
            Previous
          </button>

          <button
            disabled={disableNextButton(index, contents.length)}
            type="button"
            onClick={fetchNextRows}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
