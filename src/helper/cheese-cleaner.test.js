import { cheeseCleaner, summaryCleaner } from './cheese-cleaner';
import { mockCheeseData, mockSummaryData } from './mockData'

describe('cheeseCleaner', () => {
  it('should return an object with the specified properties', () => {
    const mockCheeseResults = [
    {
      frenchWiki: "/Ch%C3%A8vreton",
      cheeseId: "55188f0706ca252277065bf8eb1393eec55cc090",
      name: "Goat Milkton",
      milk: "Goat Milk",
      region: "Ardèche",
      picture: ""
    },
    {
    frenchWiki: "/Gruy%C3%A8re_fran%C3%A7ais",
    cheeseId: "39ac888bb730850ef3759c3430e73adeae249cef",
    name: "Gruyère français",
    milk: "Cow Milk",
    region: "Isère",
    picture: "f9f6d1919222e77d20c30b5b163b3cae"
    }]
    const cheese = cheeseCleaner(mockCheeseData)
    expect(cheese).toEqual(mockCheeseResults)
  })
})

describe('summaryCleaner', () => {
  it('should return a string from an array of arrays', () => {
    const mockSummaryResults = "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the European honey bee, for producing honey and beeswax."
    const summary = summaryCleaner(mockSummaryData)

    expect(summary).toEqual(mockSummaryResults)
  })
})