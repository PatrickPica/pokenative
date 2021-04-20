import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/$",
});

apiClient.get("/pokemon").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
