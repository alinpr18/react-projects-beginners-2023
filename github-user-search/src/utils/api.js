const API_URL = "https://api.github.com";

export async function fetchResult(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`)
    const data = await response.json()
    return data.items
  } catch (error) {
    throw new Error(error)
  }
}