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
      touchButton(buttonElement)
    })
    //タイマー機能
    startTime = Date.now()
    intervalID = setInterval(() => {
      countUp()
    },10)
  })
  
  //ボタンの順番を判別する関数
  let judgeNum = 0
  const touchButton = (button) => {
    button.addEventListener('click',() => {
      if(button.textContent == judgeNum){
        button.classList.replace('active','inactive')
        judgeNum++
      }
      if(judgeNum > 3){
        judgeNum = 0
        clearInterval(intervalID)
      }
    })
  }

  const pElement = document.getElementById('score')
  //タイマーの関数
  const countUp = () => {
    const elapsedTime = new Date(Date.now() - startTime)
    const milliSeconds = String(elapsedTime.getMilliseconds()).padStart(3,'0')
    const seconds = String(elapsedTime.getSeconds()).padStart(2,'0')
    pElement.textContent = `${seconds}.${milliSeconds}`
  }
}