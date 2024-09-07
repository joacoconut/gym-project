export const exerciseOptions = {
  method: "GET",
  params: {
    offset: "0",
    limit: "20",
  },
  headers: {
    "x-rapidapi-key": "77b3f982f2mshfaf5e09fc694395p17a888jsn8beafc93e80d",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
