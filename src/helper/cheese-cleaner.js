export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    let picture;
    if (cheese.fields.image) {
      picture = cheese.fields.image.id
    } else {
      picture = ''
    }
    return {frenchWiki: cheese.fields.french_page.substring(cheese.fields.french_page.lastIndexOf('/')),
            cheeseId: cheese.recordid,
            name: cheese.fields.cheese,
            milk: cheese.fields.milk,
            region: cheese.fields.id,
            picture
          }
  });
}

export const summaryCleaner = (summaryData) => {
  return summaryData[2][0]
}