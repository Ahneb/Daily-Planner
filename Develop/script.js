const date = new Date().toLocaleDateString('en-us', {year:"numeric", month:"short", day:"2-digit"});
const day = new Date().toLocaleDateString('en-us', {weekday:"long"});
const time_block = document.querySelectorAll('.timeblock');
const container = document.querySelector('.container');

document.querySelector('#currentDay').textContent = day + " " + date; //  a simple replace removes the comma;

for (let i = 1; i < 25; i++){
    //create initial a section container for each hour
    const section = document.createElement('div');
    section.id = i;
    section.classList.add('timeblock');
    container.appendChild(section);

    //add time block into each section
    const innerSection1 = document.createElement('div');
    innerSection1.textContent= i;
    innerSection1.id = 'block1';    
    innerSection1.classList.add('blocks');

    //add task block into each section
    const innerSection2 = document.createElement('div');
    innerSection2.id = 'block2';    
    innerSection2.classList.add('blocks');
    innerSection2.contentEditable= 'true';


    //add save button into each section
    const innerSection3 = document.createElement('div');
    innerSection3.id = 'block1';    
    innerSection3.classList.add('blocks', 'saveButton');

    const innerSpan = document.createElement('span');
    innerSpan.classList.add('icon');
    innerSection3.appendChild(innerSpan);

    const fontIcon = document.createElement('i');
    fontIcon.classList.add('fa', 'fa-floppy-disk');
    innerSpan.appendChild(fontIcon);

    //add click event to all save buttons
    innerSection3.addEventListener('click', () => {
        let parentID = innerSection3.parentNode.id;
        let blockContent = innerSection3.parentNode.childNodes[1].innerText;
        localStorage.setItem(parentID, blockContent);
        console.log(section.parentElement.parentElement.childNodes[1].childNodes[7].textContent = 'We have set a new item');

    });


    //set text for each section
    if (window.localStorage.getItem([i]) === null || window.localStorage.length === 0){
        innerSection2.textContent = 'Enter your Task';
    } else {
        innerSection2.textContent = window.localStorage.getItem([i]);
    }


    const current_time = new Date().getHours()+1;

    //append all 3 innersections to section
    section.appendChild(innerSection1);
    section.appendChild(innerSection2);
    section.appendChild(innerSection3);

    if(i < current_time){
        // console.log('current time is: ' + current_time + ' id is: ' + i + ' grey');
        section.classList.add('isGrey');
    } else if (i === current_time){
        // console.log('current time is: ' + current_time + ' id is: ' + i + ' green');
        section.classList.add('isGreen');
    } else if (i > current_time){
        // console.log('current time is: ' + current_time + ' id is: ' + i + ' red');
        section.classList.add('isRed');
    }
};
