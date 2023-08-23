{
  'use strict'
  const startButton = document.getElementById('start')
  let startTime;
  let intervalID;
  
  startButton.addEventListener('click',()=>{
    const buttonElements = document.querySelectorAll('.inactive')
    const numArray = [0,1,2,3] 
    buttonElements.forEach((buttonElement) => {
      buttonElement.classList.replace('inactive','active')
      let index = Math.floor(Math.random() * numArray.length)
      buttonElement.textContent = numArray[index]
      numArray.splice(index,1)
      touchButton(buttonElement,numArray)
    })
    //タイマー機能
    startTime = Date.now()
    intervalID = setInterval(() => {
      countUp()
    },10)
  })
  

  let judgeNum = 0
  
  const touchButton = (button,numArray) => { //引数としてnumArrayを渡す
    const arrayMax = (a,b) => {
      return Math.max(a,b)
    }
    const arrayMin = (a,b) => {
      return Math.min(a,b)
    } 
    debugger
    const max = numArray.reduce(arrayMax)
    const min = numArray.reduce(arrayMin)
    
    button.addEventListener('click',() => {
      if(button.textContent == judgeNum){
        button.classList.replace('active','inactive')
        judgeNum++
      }
      if(judgeNum > max){
        judgeNum = min
        clearInterval(intervalID)
      }
    })
  }

  const score = document.getElementById('score')
  //タイマーの関数
  const countUp = () => {
    const elapsedTime = new Date(Date.now() - startTime)
    const milliSeconds = String(elapsedTime.getMilliseconds()).padStart(3,'0')
    const seconds = String(elapsedTime.getSeconds()).padStart(2,'0')
    score.textContent = `${seconds}.${milliSeconds}`
  }
}