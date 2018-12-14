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
  
  const setDisplayDetail = function (id) {
    const item = this.findById(id);
    item.displayDetail = !item.displayDetail;
  };

  const setItemEditing = function (id) {
    const item = this.findById(id);
    item.isEditing = !item.isEditing;
  };

  return {
    items: [],
    adding: false,
    error: null,
    
    addItem,
    findById,
    findAndDelete, 
    filterByRating,
    setDisplayDetail,
    setItemEditing
  };
})();