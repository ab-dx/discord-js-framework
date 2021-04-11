module.exports = {

  colors: ['#8FBCBB', '#88C0D0', '#81A1C1','#5E81AC', '#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'],
  getColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

};
