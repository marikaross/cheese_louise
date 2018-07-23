export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    return {image: cheese.image,
            cheeseId: cheese.recordid,
            name: cheese.fields.cheese,
            milk: cheese.fields.milk,
            region: cheese.fields.id
          };
  });
}