// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  
  planets.forEach(function(element){
      var dropdown = document.getElementById('planets');
      var option = document.createElement('option');
      var txt = document.createTextNode(element[0]);
      option.appendChild(txt);
      dropdown.insertBefore(option,dropdown.lastChild);
    });

    
    var namePlanet = document.getElementById("planets").value;

function calculateWeight(userWeight, planetName){
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").selectedIndex;
    var gravity = planets[planetName][1];
    var result = userWeight * gravity;
    return result;
};
 

  function handleClickEvent() {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetName);

        document.getElementById("output").innerHTML = "If you were on " + planetName+ ", you would weigh " + result+ "lbs!";
    }


  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)  