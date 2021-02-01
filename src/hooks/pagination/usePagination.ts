import OFFSET from "constants/pagination";

function usePagination() {
  const getPaginatedItems = (
    // Disable ESLint for items because the value could be several types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Record<string, any>[],
    currentIndex: number
  ) => {
    if (items.length < OFFSET) {
      return items;
    }

    if ((currentIndex + 1) * OFFSET <= items.length) {
      const currentOffset = currentIndex * OFFSET;
      const maximumIndex = (currentIndex + 1) * OFFSET;

      return items.slice(currentOffset, maximumIndex);
    }

    return [];
  };

  // Index + 1 because index starts at 0
  const disableNextButton = (index: number, arrayLength: number) =>
    OFFSET * (index + 1) === arrayLength;

  const disablePreviousButton = (index: number) => !index;

  return { disableNextButton, disablePreviousButton, getPaginatedItems };
}

export default usePagination;
