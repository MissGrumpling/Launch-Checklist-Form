// Write your JavaScript code here!

   window.addEventListener("load", function(){
      let form = document.getElementById("launchForm");
      form.addEventListener("submit", function(event) {
         event.preventDefault();

      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      const faultyItems = document.getElementById("faultyItems");   
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");   

         let validationFailed = false;

         if(pilotName.value === "" ||copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required!");
            return false;
         }
         if(isNaN(fuelLevel.value)|| isNaN(cargoMass.value)){
            alert("please enter valid information");
            return false;
         }
         if(!isNaN(pilotName.value)||!isNaN(copilotName.value)){
            alert("Please enter valid information"); 
            return false;
         }
         

         if(cargoMass.value > 10000 && fuelLevel.value < 10000 ){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch!';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch`;
            copilotStatus.innerHTML = `CoPilot ${copilotName.value} ready for launch`;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            cargoStatus.innerHTML = 'Cargo mass too high for launch';
         }

         if(fuelLevel.value < 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch!';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch`;
            copilotStatus.innerHTML = `CoPilot ${copilotName.value} ready for launch`;
            fuelStatus.innerHTML = 'Fuel level too low for launch';
         }
         
         if(cargoMass.value > 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle not ready for launch!';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch`;
            copilotStatus.innerHTML = `CoPilot ${copilotName.value} ready for launch`;
            cargoStatus.innerHTML = 'Cargo mass too high for launch';
         }

         if(cargoMass.value < 10000 && fuelLevel.value > 10000 ){
            launchStatus.innerHTML = 'Shuttle is ready for launch!';
            launchStatus.style.color = 'green';
            faultyItems.style.visibility = 'hidden';
         }

      });

   });
   









/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
