{
  'use strict'

  const startButton = document.getElementById('start')
  let startTime;
  startButton.addEventListener('click',()=>{
    const buttonElements = document.querySelectorAll('.inactive')
    const numArray = [0,1,2,3] 
    buttonElements.forEach((buttonElement) => {
      buttonElement.classList.replace('inactive','active')
      let index = Math.floor(Math.random() * numArray.length)
      buttonElement.textContent = numArray[index]
      numArray.splice(index,1)
    })
    
    
    //タイマー機能
    startTime = Date.now()
    intervalID = setInterval(() => {
      countUp()
    },10)

  })

  const pElement = document.getElementById('score')
  const countUp = () => {
    const elapsedTime = new Date(Date.now() - startTime)
    const milliSeconds = String(elapsedTime.getMilliseconds()).padStart(3,'0')
    const seconds = String(elapsedTime.getSeconds()).padStart(2,'0')
    pElement.textContent = `${seconds}.${milliSeconds}`
  }
}