// api.js

export const fetchData = (query) => {
  if (query.trim() !== "") {
    return fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        query
      )}&limit=9`
    ).then((response) => response.json());
  }
  return Promise.resolve(null);
};
