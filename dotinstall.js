'use strict' 
{
  class Panel {
    constructor(){
      this.button = document.createElement('button')
      this.button.className = 'inactive'
    }
  }
  class Board {
    constructor(){
      this.pales = []
      for(let i = 0; i < 4; i++){
        this.pales.push(new Panel())
      }
      this.setUp()
    }
  }


  const board = new Board()
  console.log(board)
}