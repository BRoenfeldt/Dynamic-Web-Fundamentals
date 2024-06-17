// Start Code for adding multiple participants
let participants = 1;

// Get the button element
const addButton = document.getElementById('add');

// Attach an event listener to the button
addButton.addEventListener('click', addParticipantHandler);

function participantTemplate(count) {
  count++;
  return count;
}
// Function to be executed when the button is clicked
function addParticipantHandler() {
  // Call the addParticipant function to generate the participant HTML
  const participantHTML = addParticipant();

  // Get the container element where you want to append the participant HTML
  const container = document.getElementById('form');

  // Create a new div element to hold the participant HTML
  const newParticipant = document.createElement('div');
  newParticipant.innerHTML = participantHTML;

  // Append the new participant element to the container
  container.appendChild(newParticipant);
}

function addParticipant() {
  let currentParticipantNumber = participantTemplate(participants);
  participants++;
  const HTMLplaceholder = document.getElementById('participantPlacer');
  const sectionHTML =  `<section class="participant${currentParticipantNumber}">
    <p>Participant ${currentParticipantNumber}</p>
    <div class="item">
      <label for="fname${currentParticipantNumber}"> First Name<span>*</span></label>
      <input id="fname${currentParticipantNumber}" type="text" name="fname" value="" required />
    </div>
    <div class="item activities">
      <label for="activity${currentParticipantNumber}">Activity #<span>*</span></label>
      <input id="activity${currentParticipantNumber}" type="text" name="activity" />
    </div>
    <div class="item">
      <label for="fee${currentParticipantNumber}">Fee ($)<span>*</span></label>
      <input id="fee${currentParticipantNumber}" type="number" name="fee" />
    </div>
    <div class="item">
      <label for="date${currentParticipantNumber}">Desired Date <span>*</span></label>
      <input id="date${currentParticipantNumber}" type="date" name="date" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${currentParticipantNumber}">
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`;
  HTMLplaceholder.insertAdjacentHTML('beforeend', sectionHTML);
}
// End Code for adding multiple participants

//Start code for submitting the form

// Get the button element
const submitButton = document.getElementById('submitButton');
// Add an event listener to the button
submitButton.addEventListener('submitButton', submitForm);

function submitForm() {
  let name = document.getElementById('name').value;
  let activity = document.getElementById('activity').value;
  let fee = document.getElementById('fee').value;
  let date = document.getElementById('date').value;
  let participants = document.getElementById('participants').value;
  let form = document.getElementById('form');
  let data = {
      name: name,
      activity: activity,
      fee: fee,
      date: date,
      participants: participants
  }
  console.log(data);
  showTotal();
  alert('Form submitted successfully');
  form.reset();
  return false;
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  total = 0;
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  feeElements.forEach(fee => {
    total += parseInt(fee.value);
  });
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  
  // once you have your total make sure to return it!
  return total
  }

  function showTotal() {
    let total = totalFees();
    alert(`The total fees for all participants is: $${total}`);
  }

//End code for submitting the form