let body = document.querySelector('body');

getData()
// backButton()

function getData() {
  const btn = document.getElementById("btnData")
  btn.addEventListener('click', houseUrl)
}

function houseUrl() {
  $.get("https://api.gameofthronesquotes.xyz/v1/houses", getHouse)
}


function getHouse(data) {
  const houses = document.getElementById('houses')
  for (let house of data) {
    const div = document.createElement('div')
    div.textContent = house.name
    div.className = house.slug
    displayMembers(div)
    houses.append(div)
  }
}

function displayMembers(div) {
  div.addEventListener("click", displayClass)

}

function displayClass(e) {
  $.get(`https://api.gameofthronesquotes.xyz/v1/house/${e.target.className}`, showMembers)
}


function showMembers(data) {
  
    const another = document.createElement('div')
    another.className = ('House-Member')
    const house = data[0].members
  for (let member of house) {
    const members = document.createElement('div');
    member.className = 'memberdiv'
    members.textContent = member.name;
    another.appendChild(members)
    body.append(another)
  }
}

// function backButton() {
//   var returnButton = document.getElementById('backBtn')
//       returnButton.addEventListener('click', function() {
//        $('#btnData').hide()
//         $('#btnData').show();
//       $('#backBtn').hide()
//       $('#backBtn').show()
  
//           })
//       $('.House-Member').append(returnButton);
//      }
  