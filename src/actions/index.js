export const addCheese = (cheeses) => ({
    type: 'ADD_CHEESE',
    cheeses

})

export const toggleFaveCheese = () => ({
    type: 'TOGGLE_FAVORITE_CHEESE'
})

export const addFaveCheese = (cheeseId) => ({
  type: 'ADD_FAVE_CHEESE',
  cheeseId
})

export const deleteCheese = (cheeseId) => ({
  type: 'DELETE_CHEESE',
  cheeseId
})
