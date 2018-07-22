export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    return { cheese.fields.image.filename
            name: cheese.fields.cheese
            milk type: cheese.fields.milk
            region: cheese.fields.id
          };
  });
}