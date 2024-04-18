import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID tGzZL4y3Bm2Bj1_NDbia1IAEnxjulHcda0SH5sOOxAg",
    },
    params: {
      query: term,
    },
  }); // istek atılacak link, access linki
  debugger;
  return response.data.results; // dönen verinin yolunu takip ettik.
};

export default searchImages;
