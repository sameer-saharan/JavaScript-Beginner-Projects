let global_id = 1;

// Load state data in To-Do List------------
let state = [
    {
        title: "Wake up",
        description: "Wake up by 4:10 AM",
        id: 0
    },
    {
        title: "Go to Gym",
        description: "Go to GYM by 4:30 AM",
        id: 0
    },
    {
        title: "Breakfast",
        description: "Get breakfast done by 7:00 AM",
        id: 0
    },
];

function showState() {
    const parent = document.querySelector('.todo-list');
    for(i=0; i<3; i++) {
        state[i].id = global_id++;
        parent.appendChild(createChild(state[i].title, state[i].description, state[i].id));
    }
};


// Main Todo App---------------------
function addToDo() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const parent = document.querySelector('.todo-list');

    parent.appendChild(createChild(title, description, global_id++));

}

function markAsDone(id) {
    const element = document.getElementById(id);
    element.children[2].innerHTML = "Done!"
}

function removeToDo(id) {
    const element = document.getElementById(`${id}`);
    element.parentNode.removeChild(element);
}

function createChild(title, description, id) {
    const child = document.createElement('div');
    child.setAttribute('id', `${id}`)
    
    const gcTitle = document.createElement('div');
    gcTitle.innerHTML = title;
    const gcDescription = document.createElement('div');
    gcDescription.innerHTML = description;
    const gcMarkDone = document.createElement('button');
    gcMarkDone.innerHTML = "Mark as done";
    gcMarkDone.setAttribute('onclick', `markAsDone(${id})`);
    const gcDelete = document.createElement('button');
    gcDelete.innerHTML = "Delete";
    gcDelete.setAttribute('onclick', `removeToDo(${id})`);

    child.appendChild(gcTitle);
    child.appendChild(gcDescription);
    child.appendChild(gcMarkDone);
    child.appendChild(gcDelete);

    return child
};

document.body.style.zoom="200%";