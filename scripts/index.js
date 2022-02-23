var vid = document.getElementById("myVideo");
vid.playbackRate = 0.7;

//quotes
var quotes = ['"The bad news is time flies. The good news is you’re the pilot."',
  '"No matter what people tell you, words and ideas can change the world."',
  '"Believe you can and you’re halfway there."', '"Believe you can and you’re halfway there."',
  '"Wake up determined, go to bed satisfied."',
  '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
  '"The only limit to our realization of tomorrow will be our doubts today."',
  '"Definitions belong to the definers, not the defined."',
  '"If my mind can conceive it, if my heart can believe it, then I can achieve it."'
]
console.log('quotes.length ' + quotes.length)


//random number for quotes
var randnum = Math.floor((Math.random()) * quotes.length)
console.log('random num ' + randnum)
console.log('random quote ' + quotes[randnum])


//shows quotes
function showquotes() {
  var quotations = document.getElementById("usersquotes")
  quotations.textContent = quotes[randnum]
  console.log(quotations)
}
showquotes()


//add quotes option
var aqButton = document.getElementById('addquotes')
console.log(aqButton)
aqButton.onclick = function () {
  adddquotes()
}

function adddquotes() {
  document.querySelector("#quotesform").classList.toggle("show")
  console.log(document.querySelector("#quotesform"))
}


//add new quote to array
let quotesbutton = document.querySelector("#quotesbutton")


function addNewq() {
  let newQuote1 = document.querySelector("#quotesinput").value
  let newQuote = `"${newQuote1}"`
  if (newQuote1 === "") {
    alert("Please type a quote.")
  } else {
    quotes.push(newQuote)
    document.querySelector("#quotesinput").value = ""
    console.log('quotes.length ' + quotes.length)
    console.log(quotes)
    var quotations = document.getElementById("usersquotes")
    quotations.textContent = newQuote
  }
  return false
}


//display username
var urlstring = window.location.href
var parameters = new URLSearchParams(window.location.search)
var username = parameters.get('name')
console.log(username)
let displayUsernamedisplay = document.getElementById("displayname")
console.log(displayUsernamedisplay)
displayUsernamedisplay.textContent = username

//goodmorning or goodnight

function greeting() {
  var dateToday = new Date()
  var hournow = dateToday.getHours()
  console.log(hournow)
  let usergreeting = document.getElementById("displaygreeting")
  if (hournow > 12) {
    //Good evening, 
    usergreeting.textContent = 'Good afternoon, '

    if (hournow > 18) {
      usergreeting.textContent = 'Good evening, '
    }
  } else {
    //Good morning, 
    usergreeting.textContent = 'Good morning, '
  }
}
greeting()



//add focus for the day
const userfocusbutton = document.getElementById("focusbutton")
userfocusbutton.onclick = function () {
  addNewfocus()
  console.log("success")
}

function addNewfocus() {
  document.querySelector("#focushide").classList.toggle("hide")
  document.querySelector("#h3hide").classList.toggle("hide")
  document.querySelector("#focusform").classList.toggle("hide")

  document.querySelector("#usersfocus").classList.toggle("hide")
  document.querySelector("#h3show").classList.toggle("hide")
  document.querySelector("#focusshow").classList.toggle("hide")
  document.querySelector("#todaysfocus").classList.toggle("hide")
  document.querySelector("#crossedout").classList.toggle("hide")

  var todaysfocusinput = document.getElementById("focusinput").value
  console.log(todaysfocusinput)
  document.getElementById("crossedout").textContent = todaysfocusinput

  var movedown = document.getElementById("usersfocus")

  if (movedown.style.top !== "70%") {
    movedown.style.top = "70%"
  } else {
    movedown.style.top = "10%"
    alert("GOOD JOB!")
  }


}

//todo list
var todolistarray = []


//show todo input form
var addtodobutton = document.getElementById('addtodo')
addtodobutton.onclick = function () {
  addNewtodo()
}

function addNewtodo() {
  console.log(addtodobutton)
  document.querySelector("#todoform").classList.toggle("show")
  console.log(document.querySelector("#todoform"))
}

//add inputted todo to array
let todobutton = document.querySelector("#todobutton")
function addtodotolist() {
  let usertodoinput = document.querySelector("#todoinput").value
  todolistarray.push(usertodoinput)
  document.querySelector("#todoinput").value = ""
  console.log(document.querySelector("#todoinput").value)
  console.log(todolistarray)


  var newli = document.createElement("li")
  var newpi = document.createElement("p")

  newpi.innerHTML= todolistarray[(todolistarray.length-1)]
  newpi.setAttribute("class", "todododododo")
  newli.appendChild(newpi)

  
  var checkbox = document.createElement('input')
  checkbox.type = "checkbox"
  newli.prepend(checkbox);
  



  var remove = document.createElement('p')
  remove.innerHTML = `<i class="large material-icons">remove_circle_outline</i>`
  remove.setAttribute("class", "icon")
  console.log(remove)
  newli.prepend(remove)


    console.log(newli)
    var thelist = document.querySelector("#userstodo")
    thelist.append(newli)
    console.log(thelist)
  return false
}

//show add todo list
function showtodolist(){

  for (i=0; i<todolistarray.length; i++)
  {
    var newli = document.createElement("li")
    newli.innerHTML = todolistarray[i]
    console.log(newli)
    var thelist = document.querySelector("#userstodo")
    thelist.appendChild(newli)
    console.log(thelist)
  }
}








//clock

const FORMATS = {
  TwelveHours: 12,
  TwentyFourHours: 24
}

class Clock {
  format = FORMATS.TwentyFourHours;

  constructor(clockDivId) {
    this.clockDivId = clockDivId;

    this.clockInterval = setInterval(() => {
      document.getElementById(clockDivId).innerHTML = this.getCurrentTime().format(this.format);
    }, 500)
  }

  getCurrentTime() {
    let today = new Date();
    return new Time(today.getHours(), today.getMinutes());
  }

  switchTo12HourFormat() {
    this.format = FORMATS.TwelveHours
  }

  switchTo24HourFormat() {
    this.format = FORMATS.TwentyFourHours
  }

  destroy() {
    clearInterval(this.clockInterval);
  }

}

class Time {

  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
  }

  format(type) {
    switch (type) {
      case FORMATS.TwentyFourHours: {
        return this.print(this.hours)
      }
      case FORMATS.TwelveHours: {
        let hours = this.hours % 12;
        if (hours == 0) {
          hours = 12;
        }
        return this.print(hours);
      }

    }

  }

  //private
  to2Digits(number) {
    return number < 10 ? '0' + number : '' + number;
  }

  print(hours) {
    return this.to2Digits(hours) + ':' + this.to2Digits(this.minutes);
  }

}

let clock = new Clock("clock");

//time dropdown option
var tddButton = document.getElementById('toggletime')
console.log(tddButton)
tddButton.onclick = function () {
  timeOptions()
}

function timeOptions() {
  document.querySelector("#timedropdown").classList.toggle("show")
  console.log(document.querySelector("#timedropdown"))
}