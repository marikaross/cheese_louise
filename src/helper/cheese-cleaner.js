export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    return {cheeseId: cheese.recordid,
            name: cheese.fields.cheese,
            milk: cheese.fields.milk,
            region: cheese.fields.id,
            picture: cheese.fields.image || null
          };
  });
}