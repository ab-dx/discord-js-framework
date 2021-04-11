const getColor = require('./colors');

module.exports = {

  embed(text){
    return {
      color: getColor.getColor(),
      description: text
    };
  }

};
