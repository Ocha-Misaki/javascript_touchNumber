{
  'use strict'

  const createNumArray = (num) => {
    return Array.from({length:num }, (_, n) => n)
  }
  const shuffleNumArray = (array) => {
    for(let i = array.length-1; i > 0; i--){
      let randomNum = Math.floor(Math.random() * i)
      let tmp = array[i]
      array[i] = array[randomNum]
      array[randomNum] = tmp
    }
    return array
  }

  let buttonNum = 4
  const playField = document.getElementById('play_field')
  const createButton = () => {
    const numArray = shuffleNumArray(createNumArray(buttonNum))
    for(let i = 0; i < numArray.length; i++){
      let buttonElement = document.createElement('button')
      buttonElement.textContent = numArray[i]
      buttonElement.className = 'inactive'
      playField.appendChild(buttonElement)
    }
  }
  createButton()
  
  const startButton = document.getElementById('start')
  startButton.addEventListener('click',()=>{
    while(playField.firstChild !== null){
      playField.removeChild(playField.firstChild)
    }
    createButton()
    const buttonElements = document.querySelectorAll('.inactive')
    buttonElements.forEach((buttonElement) => {
      buttonElement.classList.replace('inactive','active')
      touchButton(buttonElement)
    })
    startTimer()
  })
  
  let judgeNum = 0
  const touchButton = (button) => { 
    button.addEventListener('click',() => {
      if(button.textContent == judgeNum){
        button.classList.replace('active','inactive')
        judgeNum++
      }
      if(judgeNum > buttonNum-1){
        judgeNum = 0
        stopTimer()
      }
    })
  }

  let startTime;
  let intervalID;
  const startTimer = () => {
    startTime = Date.now()
    intervalID = setInterval(() => {
      updateScore()
    },10)
  }
  const stopTimer = () => {
    clearInterval(intervalID)
  }
  const score = document.getElementById('score')
  const updateScore = () => {
    const elapsedTime = new Date(Date.now() - startTime)
    const milliSeconds = String(elapsedTime.getMilliseconds()).padStart(3,'0')
    const seconds = String(elapsedTime.getSeconds()).padStart(2,'0')
    score.textContent = `${seconds}.${milliSeconds}`
  }
}
