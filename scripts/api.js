'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/duy';

  
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback); 
  };


  const createItem = function(title, url, desc, rating, onError, callback){
    const newItem = JSON.stringify(
      {
        id: cuid(),
        title,
        url,
        desc,
        rating
      });

    $.ajax({
      url:`${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: onError,
    });
  };


  const updateItem = function(id, updateData, callback){
    $.ajax({
      url:`${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };


  const deleteItem = function(id, callback){
    $.ajax({
      url:`${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: callback
    });
  };


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());