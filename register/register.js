let participants = 1;
const button = document.getElementById('add');
button.addEventListener('click', viewHandler);
function viewHandler(event) {
    // 1. Create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
  
    // 3. Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImageSrc = `${imageSrcParts[0]}-full.jpeg`;
  
    // 4. Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", addParticipant);
}

function addParticipant() {
    return `<section class="participant1">
    <p>Participant 1</p>
    <div class="item">
      <label for="fname"> First Name<span>*</span></label>
      <input id="fname" type="text" name="fname" value="" required />
    </div>
    <div class="item activities">
      <label for="activity">Activity #<span>*</span></label>
      <input id="activity" type="text" name="activity" />
    </div>
    <div class="item">
      <label for="fee">Fee ($)<span>*</span></label>
      <input id="fee" type="number" name="fee" />
    </div>
    <div class="item">
      <label for="date">Desired Date <span>*</span></label>
      <input id="date" type="date" name="date" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
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
  </section>
  <button type="button" id="add">Add Participant</button>`
}


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
    form.reset();
    return false;
}