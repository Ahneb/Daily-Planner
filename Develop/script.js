const date = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"2-digit"});
const day = new Date().toLocaleDateString('en-us', {weekday:"long"});
const save_button = document.querySelectorAll('.saveButton');
const time_block = document.querySelectorAll('.timeblock');
const container = document.querySelector('.container');


save_button.forEach((button) => {
    button.addEventListener('click', () => {
        let parentID = button.parentElement.id;
        let blockContent = button.parentElement.childNodes[3].textContent;

        localStorage.setItem(parentID, blockContent);
        console.log('set value is: ', parentID + ' and ' + blockContent);
    })
});

for (let i = 0; i < 4; i++) {
    console.log(time_block[i]);
    console.log(time_block[i].childNodes[3].textContent);
    console.log(localStorage);
    console.log(window.localStorage.getItem([i+1]));
    time_block[i].childNodes[3].textContent = window.localStorage.getItem([i+1]);

}

// for (let i = 1; i < 25; i++){
    
// }



document.querySelector('#currentDay').textContent = day + " " + date; //  a simple replace removes the comma;



{/* <div id="1" class="timeblock">
    <div id="block1" class="blocks ">
        12AM
    </div>
    <div id="block2" class="blocks" contenteditable="true">
        Your Tasks for the hour
    </div>
    <div id="block1" class="blocks saveButton">
    <span class="icon">
        <i class="fa fa-floppy-disk"></i>
    </span>
    </div>
</div> */}