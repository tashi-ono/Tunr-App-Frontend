let apiUrl = "";
const apiUrls = {
  production: "https://tashiono-tunr.herokuapp.com/songs",
  development: "http://localhost:3000/songs",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
