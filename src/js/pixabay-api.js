export const searchParams  =  {
    key: "11070675-9db3ad99120a3eae94c3d42ec",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    pretty: "true",
}

export function fetchPhoto(params) {
    if (params.q === "") {
        return
    }
  return fetch(
    `https://pixabay.com/api/?${new URLSearchParams(params)}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
      }
    return response.json();
  });
}