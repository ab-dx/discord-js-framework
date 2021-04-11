const getColor = require('./colors');

module.exports = {

  embed(title, text){
    return {
      color: getColor.getColor(),
      title,
      description: text
    };
  }

};
