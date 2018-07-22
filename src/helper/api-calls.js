export const fetchCheese = async () => {
  const url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=frenchcheese%40public&facet=id&facet=cheese&facet=milk'
  const response = await fetch(url)
  return response.json()
}