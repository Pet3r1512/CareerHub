import Router from "next/router";

type QueryProps = {
  pathname: string;
  query: {
    search?: string | string[];
    page?: string | string[] | number;
    location?: string | string[];
    industry?: string | string[];
    size?: string | string[];
  };
};

export function PushQuery({ pathname, query }: QueryProps) {
  const params = new URLSearchParams({
    ...(query.page && { page: query.page.toString() }),
    ...(query.search && { search: query.search.toString() }),
    ...(query.location &&
      query.location != "All" && {
        location: query.location.toString(),
      }),
    ...(query.industry && { industry: query.industry.toString() }),
    ...(query.size && { size: query.size.toString() }),
  });

  const newQuery = params.toString() ? `${params.toString()}` : "";

  return Router.replace(
    {
      pathname: pathname,
      query: newQuery,
    },
    undefined,
    { scroll: false }
  );
}
