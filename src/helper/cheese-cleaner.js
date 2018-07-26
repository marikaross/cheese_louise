export const cheeseCleaner = (cheeseData) => {
  return cheeseData.records.map(cheese => {
    let picture;
    if (cheese.fields.image) {
      picture = cheese.fields.image.id
    } else {
      picture = '../images/sad-cheese.jpg'
    }
    return {cheeseId: cheese.recordid,
            name: cheese.fields.cheese,
            milk: cheese.fields.milk,
            region: cheese.fields.id,
            picture
          };
  });
}