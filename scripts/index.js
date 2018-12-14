'use strict';

$(function() {
  api.getItems(items => {
    items.forEach(item => {
      store.addItem(item);
    });
    bookmarkList.render();
  });
  bookmarkList.bindEventListeners();
  bookmarkList.render();
});