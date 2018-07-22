export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    return {cheeseId: cheese.fields.recordid,
            name: cheese.fields.cheese,
            milk: cheese.fields.milk,
            region: cheese.fields.id
          };
  });
}