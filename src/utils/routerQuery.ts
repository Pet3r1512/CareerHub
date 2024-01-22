import Router from "next/router";

type QueryProps = {
  pathname: string;
  query: {
    search?: string | string[];
    page?: string | string[] | number;
    location?: string | string[];
    options?: string | string[];
  };
};

export function PushQuery({ pathname, query }: QueryProps) {
  return Router.push(
    {
      pathname: pathname,
      query: {
        search: query.search,
        location: query.location,
        options: query.options,
        page: query.page,
      },
    },
    undefined,
    { scroll: false }
  );
}
