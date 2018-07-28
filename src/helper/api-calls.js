

export const fetchCheeseSummary = async (urlSuffix) => {
  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${urlSuffix}&limit=1&format=json`
  const response = await fetch(url)
  return response.json()
}