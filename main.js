// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').className = 'hidden'//hides error when page is loaded


document.addEventListener('click', clickEvent) //event listener for any click on the webpage

//callback function from any click event
function clickEvent(event) {
  let clickTarget = event.target
  let clickTargetValue = clickTarget.innerHTML

  //invoke the fake server call function
  mimicServerCall()
        .then(heartClick)
        .catch(res => showError(res)) //unhides error when server response is an error
  
        function heartClick(){  
                  
          if (clickTargetValue === EMPTY_HEART){
            console.log(clickTargetValue)    
                clickTarget.innerHTML = FULL_HEART
                clickTarget.className = 'activated-heart'
            } else if (clickTargetValue === FULL_HEART)
              {clickTarget.innerHTML = EMPTY_HEART
                clickTarget.className = 'like-glyph'
                console.log('full run')
            }
        }
}
     


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.")
        console.log('yeet');
      } else {
        resolve("Pretend remote server notified of action!");
        console.log('works')
      }
    }, 300);
    
  });
}

//shows error message
function showError(res){
  document.getElementById('modal').innerText = res
    document.getElementById('modal').className = ''
  setTimeout(hideError,3000)
}

function hideError(){
  console.log(document.getElementById('modal').className)
  document.getElementById('modal').className = 'hidden'

}

// function heartClick(clickTarget,clickTargetValue){  
                  
//   if (clickTargetValue === EMPTY_HEART){
//     console.log(clickTargetValue)    
//         clickTarget.innerHTML = FULL_HEART
//         clickTarget.className = 'activated-heart'
//     } else if (clickTargetValue === FULL_HEART)
//       {clickTarget.innerHTML = EMPTY_HEART
//         clickTarget.className = 'like-glyph'
//         console.log('full run')
//     }
// }