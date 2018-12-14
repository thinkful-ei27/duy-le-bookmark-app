'use strict';

const bookmarkItem = (function(){

  const create = function(name) {
    return {
      id: cuid(),
      title,
      url,
      desc,
      rating,
      expanded: false,
      isEditing: false,
    };
  };
      
  return {
    create,
  };
        
}());
      