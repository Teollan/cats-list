import { client } from "../util/api/client";
import { Cat } from "../util/types/Cat";

export default async function fetchCatsById(ids: string[]): Promise<Cat[]> {
  return Promise.all(ids.map((id) => client.get<Cat>(`images/${id}`)));
}
