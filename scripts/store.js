'use strict';

const store =(function(){

  const addItem = function(item) {
    this.items.push(item);
  };
    
  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };
    
  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };
    
    
  function filterByRating(val) {
    this.items = this.items.filter( item => {
      return item.rating >= val;
    });
  }
    
  return {
    items: [],
    minRating = 1,
    adding: false,
    error: null,
    
    addItem,
    findById,
    findAndDelete, 
    filterByRating
  };
})();