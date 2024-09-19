let form = document.getElementById("form");
let inputfront = document.getElementById("inputfront");
let inputback = document.getElementById("inputback");
let postsfc = document.getElementById("postsfc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (inputfront.value === "" || inputback.value === "") {
    console.log("failure");
  } else {
    console.log("successs");
    acceptData();
  }
};

//DATA
let data = {};

let acceptData = () => {
  data["frontText"] = inputfront.value;
  data["backText"] = inputback.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  postsfc.innerHTML += `
    
    <div id="unidadefc">
        <div class="card">
        <p>${data.frontText}</p>
        <div class="hidden-text">
          <p style="font-weight: bold;">${data.backText}</p>
        </div>
        </div>
        <span class="options">
          <i onclick="editPost(this)" ><svg class="icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg></i>
          <i onclick="deletePost(this)" ><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></i>
        </span>
      </div>
    
    `;
  inputfront.value = "";
  inputback.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  inputfront.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

  inputback.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
