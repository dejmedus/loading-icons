
const flower = document.getElementById('flower');
const star = document.getElementById('star');
const happy = document.getElementById('happy');

const ref = {
    'flower': flower,
    'star': star,
    'happy': happy
}

buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', onClick)
})

function onClick(e) {
    const name = e.target.name;

    buttons.forEach(button => {
        const element = ref[button.name];
        if (button.name == name) {
            button.disabled = true;
            element.style.display = 'block'
        }
        else {
            button.disabled = false;
            element.style.display = 'none'
        }
    })
}