import assert from "assert";
import { setup } from "axios-cache-adapter";

export const api = setup({
  baseURL: `https://www.colr.org/json/color/random&timestamp=${new Date().getTime()}`,
  //
  cache: {
    exclude: {
      // Only exclude PUT, PATCH and DELETE methods from cache
      methods: ["get", "put", "patch", "delete"],
    },
  },
});

//
api.get("/url").then(async (response) => {
  // Response will not come from cache
  assert.ok(response.request.fromCache !== true);

  // Check that query was excluded from cache
  assert.ok(response.request.excludedFromCache === true);
  // Do something awesome with response.data \o/
  console.log("Request response:", response);

  // Interacting with the store, see `localForage` API.
  const length = await api.cache.length();

  console.log("Cache store length:", length);
});
