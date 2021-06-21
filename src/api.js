
import { setup } from 'axios-cache-adapter'

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
export const api = setup({
  // `axios` options
  baseURL: 'http://some-rest.api',

  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60
  }
})

// Send a GET request to some REST api
api.get('/url').then(async (response) => {
  // Do something awesome with response.data \o/
  console.log('Request response:', response)

  // Interacting with the store, see `localForage` API.
  const length = await api.cache.length()

  console.log('Cache store length:', length)
})