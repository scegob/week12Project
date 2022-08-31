let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

/* Listening for the submit event on the form. When the submit event is triggered, it will call the
formValidation function. */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    // Instead of putting it in here I wi
    //acceptData();
});

/**
 * If the input field is empty, display an error message. If the input field is not empty, clear the
 * error message and call the acceptData function.
 */
let formValidation = () => {
if(input.value === ""){
    // failure state
    msg.innerHTML = "Post cannot be blank"
    console.log("failure");
} else {
    // success state
    msg.innerHTML = "";
    console.log("success");
    acceptData();
}
};

let data = {};

/**
 * It takes the value of the input field and pushes it into the data object
 */
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

/**
 * It takes the data from the input field and adds it to the posts div.
 */
let createPost = () => {
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <img onClick="editPost(this)" class="fa-edit" src="./images/pen-to-square-regular.svg" alt="Pen to square">
            <img onClick="deletePost(this)"  class="fa-trash" src="./images/trash-can-regular.svg" alt="Trash Can">
        </span>
    </div>
    `;
    // reset the form
    input.value = ""
}

/**
 * When the delete button is clicked, remove the parent of the parent of the delete button.
 * @param e - the event object
 */
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

