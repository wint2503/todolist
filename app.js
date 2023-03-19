var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('i am working');
    addnew();
    e.preventDefault(); //not to be reload
})

// this function get li from where textbox creates and then insert to ul
function addnew(todo){
    var todotext = gettextbox.value;
    // console.log(todotext);

    // parameter ပါရင် parameter ထဲကစာကိုယူမယ်။ မပါရင် textbox က ယူမယ်။
    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(todo && todo.done){
            li.classList.add('done');
        }

        li.appendChild(document.createTextNode(todotext));
        getul.appendChild(li);
        gettextbox.value = '';

        updatelocalstorage();

        // left click to complete
        li.addEventListener('click',function(){
            li.classList.toggle('done');
            updatelocalstorage();
        })

        // right click to remove
        li.addEventListener('contextmenu',function(){
            li.remove();
            updatelocalstorage();
        })
    } 
}

function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li');
    // console.log(getalllis);

    var todos = [];
    getalllis.forEach(function(getallli){
        todos.push({
            text: getallli.textContent,
            done: getallli.classList.contains('done')
        });
    })
    // console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);

// if todos are in the localStorage, loop.
if(getlstodos){
    getlstodos.forEach(function(getlstodo){
        // console.log(getlstodo);
        // console.log(getlstodo.text);

        addnew(getlstodo);
    })
}