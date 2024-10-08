"use client";

import { EmptyState } from "./EmptyState";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: Change to API call

  if (!data?.length && query.search) {
    return (
      <EmptyState
        src="/empty-search.svg"
        heading="No results found!"
        desc="Try searching for something else"
        size={{ height: 140, width: 140 }}
      />
    );
  }

  if (!data?.length && query.favourites) {
    return (
      <EmptyState
        src="/empty-favourites.svg"
        heading="No favourite boards!"
        desc="Try favouriting a board"
        size={{ height: 140, width: 140 }}
      />
    );
  }

  if (!data?.length) {
    return (
      <EmptyState
        src="/empty-boards.svg"
        heading="Create your first board!"
        desc="Start by creating a board for your organization"
        size={{ height: 110, width: 110 }}
        button="Create board"
      />
    );
  }
  return <div>BoardList</div>;
};

export default BoardList;
