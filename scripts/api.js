'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com';

  const MY_URL = BASE_URL + '/duy/bookmarks';

  const getItems = function(callback){
    $.getJSON(`${MY_URL}`, (response) => {
      callback(response);
    });
  };

  const createItem = function(????, onError, callback){
    $.ajax({
      url: MY_URL,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(????),
      success: callback,
      error: onError,
    });
  };

  const updateItem = function(itemId, ????, callback){
    $.ajax({
      url: MY_URL + itemId,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(????),
      success: callback
    });
  };
  const deleteItem = function(itemId, callback){
    $.ajax({
      url: MY_URL + itemId,
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