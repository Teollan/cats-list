const API_KEY =
  "live_v1ospVXgfItvy2zXUId2nxWFvbKONvnmc7w8KptSrqWRN6lDm2xZaUdjx0fo8xLi";

const API_BASE = "https://api.thecatapi.com/v1/";

async function request<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const url = API_BASE + endpoint;
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Failed request to ${url}`);
  }

  return response.json();
}

function get<T>(endpoint: string): Promise<T> {
  return request(endpoint, {
    method: "GET",
    headers: {
      "x-api-key": API_KEY,
    },
  });
}

export const client = {
  get,
};
