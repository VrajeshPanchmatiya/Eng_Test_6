import axios from "axios";

export const pageService = (number: number) => {
  return axios.get(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${number}`
  );
};
