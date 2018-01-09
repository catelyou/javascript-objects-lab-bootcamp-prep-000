var recipes = {
  flour: 'cup',
  sugar: 'cups'
}
  function updateObjectWithKeyAndValue(recipes, flour, cup) {
    return Object.assign({}, recipes, {[flour]: cup})
  }
  function destructivelyUpdateObjectWithKeyAndValue(recipes, flour, cup) {
    return recipes.flour = 'cup';
  }
  function deleteFromObjectByKey(recipes, flour) {
    delete recipes.flour;
    return recipes
  }
  function destructivelyDeleteFromObjectByKey (recipes, flour){

  }
