var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('i am working');
    addnew();
    e.preventDefault(); //not to be reload
})

// this function get li from where textbox creates and then insert to ul
function addnew(){
    var todotext = gettextbox.value;
    // console.log(todotext);

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todotext));
    // li.innerHTML = todotext;
    // console.log(li);
    getul.appendChild(li);
    gettextbox.value='';

    updatelocalstorage();
}

function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li');
    console.log(getalllis);

    var todos = [];
    getalllis.forEach(function(getallli){
        todos.push(getallli.textContent);
    })
    console.log(todos);
}