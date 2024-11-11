import { client } from "../util/api/client";
import { Cat } from "../util/types/Cat";

export default function fetchCats() {
  return client.get<Cat[]>("images/search?limit=100&order=DESC");
}
