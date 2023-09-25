let userName = document.getElementById('user-account-username');
let fullName = document.getElementById('user-account-name');

let formData = JSON.parse(localStorage.getItem('formData'))
const profilePictureUrl = localStorage.getItem("signUpImg")

//Loading Data From Local Storage
document.addEventListener("DOMContentLoaded", () => {
    const profilePictureUrl = localStorage.getItem("signUpImg")
    if (profilePictureUrl) {
        document.getElementById("profilePicImgR").setAttribute("src", profilePictureUrl);
        document.getElementById("profilePicImgL").setAttribute("src", profilePictureUrl);
    }
});


let userNameShow = formData[formData.length - 1].userName;
let fullNameShow = formData[formData.length - 1].fullName;
userName.innerHTML = userNameShow;
fullName.innerHTML = fullNameShow;




////////////////////////////////////////////// Creat Post ///////////////////////////////////

const modal = document.querySelector('.modalCreat');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnAddImg = document.querySelector('.addImg');
const btnsOpenModal = document.getElementById('creatPost');
const imageChosen = document.querySelector('.imageChosen')
const imgChosen = document.getElementById('imgChosen');
const addImg = document.getElementById('addImg');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    imageChosen.classList.add('hidden');

};


const addImage = function () {
    imgChosen.src = URL.createObjectURL(addImg.files[0])
    modal.classList.add('hidden');
    imageChosen.classList.remove('hidden');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        localStorage.setItem('imageChosen', reader.result)
    })
    reader.readAsDataURL(this.files[0]);
};




addImg.addEventListener('change', addImage);

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {


    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


// Adding Post

const createPost = document.querySelector('.nextImg');

const createNewPost = function () {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    imageChosen.classList.add('hidden');
    const html =


        `<center>
    <div class="card bg-black post-card " >
        <div class="user-post d-flex ">
            <div>
                <img class="rounded-circle user-post-img " src="${profilePictureUrl}" alt="">
                <span class="user-post-name"> &nbsp;${userNameShow}</span>
                
                <span style="color:#A8a8a8;">&nbsp;
                    &#x2022; 0m</span>
            </div>
            <div class='mt-1 pt-2'> <svg aria-label="More options" class="user-post-circles  "
                    color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>
        </div>
        <div class="img-post ">
            <img src="${imgChosen.src}" class=" card-img-top"
                alt="...">
        </div>
        <div class="card-body p-0 card-body-post">

            <div class="post-icons d-flex">
                <div>
                    <div class="icon-change heart-icon " id="heart50" onclick="likePost(50)"> <i class=" fa-regular fa-heart fa-xl pe-1"
                            style="color: #ffffff; " ></i>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment fa-xl"
                        style="color: #ffffff;"></i>&nbsp;&nbsp;&nbsp;&nbsp;<svg aria-label="Share Post"
                        class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24"
                        role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                            x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                        </polygon>
                    </svg>
                </div>
                <div class="icon-change save-icon sP" onclick="saveIcone(12)"><i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;"></i>
                </div>
            </div>

            <!-- Likes -->
            <div class="likes">
                <span class= " counter-likes" id="a50"> 0
                </span><span>&nbsp; likes</span>
            </div>

            <div class="user-post-name">
                <span> ${userNameShow}</span>
            </div>
            <!-- comment -->
            <div class="comment-container">
                <div class="all-comments">View all comments
                </div>

                <div class="user-comment " id="uc50">
                    <!-- script -->
                    <!-- <div class="username-comment ">
                                                <span class=" user-account-username " id="user-account-username">
                                                    chelseafc
                                                </span>
                                                <span class="user-comment-posted">Good</span>
                                            </div> -->
                    <!-- --------------------------------------- -->

                </div>
                <div class="comment">
                    <input type="text" class="comment-box " id="c50" onclick="writeCommentAdd(50)" placeholder="Add a comment...">
                    <span class="emoji"><i class="fa-regular fa-face-smile" style="color: #ffffff;"></i></span>
                    <span class="post-comment hidden " id="p50" onclick="postComment(50)">post</span>
                </div>
            </div>

        </div>
    </div>
    </div>
</center>`

    containerCreatedPost.insertAdjacentHTML('afterend', html);

};

createPost.addEventListener('click', createNewPost)



// If there post in local storage
const containerCreatedPost = document.getElementById("createdPost");

document.addEventListener("DOMContentLoaded", () => {
    const postPictureUrl = localStorage.getItem("imageChosen")
    if (postPictureUrl) {

        const html =

            `<center>
    <div class="card bg-black post-card " >
        <div class="user-post d-flex ">
            <div>
                <img class="rounded-circle user-post-img " src="${profilePictureUrl}" alt="">
                <span class="user-post-name"> &nbsp;${userNameShow}</span>
                
                <span style="color:#A8a8a8;">&nbsp;
                    &#x2022; 0m</span>
            </div>
            <div class='mt-1 pt-2'> <svg aria-label="More options" class="user-post-circles  "
                    color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>
        </div>
        <div class="img-post ">
            <img src="${postPictureUrl}" class=" card-img-top"
                alt="...">
        </div>
        <div class="card-body p-0 card-body-post">

            <div class="post-icons d-flex">
                <div>
                    <div class="icon-change heart-icon " id="heart50" onclick="likePost(50)"> <i class=" fa-regular fa-heart fa-xl pe-1"
                            style="color: #ffffff; " ></i>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment fa-xl"
                        style="color: #ffffff;"></i>&nbsp;&nbsp;&nbsp;&nbsp;<svg aria-label="Share Post"
                        class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24"
                        role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                            x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                        </polygon>
                    </svg>
                </div>
                <div class="icon-change save-icon " id="s50" onclick="saveIcone(50)"><i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;"></i>
                </div>
            </div>

            <!-- Likes -->
            <div class="likes">
                <span class= " counter-likes" id="a50"> 0
                </span><span>&nbsp; likes</span>
            </div>

            <div class="user-post-name">
                <span> ${userNameShow}</span>
            </div>
            <!-- comment -->
            <div class="comment-container">
                <div class="all-comments">View all comments
                </div>

                <div class="user-comment " id="uc50">
                    <!-- script -->
                    <!-- <div class="username-comment ">
                                                <span class=" user-account-username " id="user-account-username">
                                                    chelseafc
                                                </span>
                                                <span class="user-comment-posted">Good</span>
                                            </div> -->
                    <!-- --------------------------------------- -->

                </div>
                <div class="comment">
                    <input type="text" class="comment-box " id="c50" onclick="writeCommentAdd(50)" placeholder="Add a comment...">
                    <span class="emoji"><i class="fa-regular fa-face-smile" style="color: #ffffff;"></i></span>
                    <span class="post-comment hidden " id="p50" onclick="postComment(50)">post</span>
                </div>
            </div>

        </div>
    </div>
    </div>
</center>`

        containerCreatedPost.insertAdjacentHTML('afterend', html);

    }
}
)



////////////////////////////////////////////// First Grop of posts  ///////////////////////////////////



const containePostsOne = document.getElementById("groupPost1")

function fetchPosts(n) {
    fetch(`https://reqres.in/api/users/${n}`)
        .then((response) => response.json())
        .then((data) => {
            if (n <= 5) {
                populatePostList(data, n);
            } else { populatePostListTwo(data); }

        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });

}


function populatePostList(people, n) {

    const html =
        ` <center>
    <div class="card bg-black post-card " >
        <div class="user-post d-flex ">
            <div>
                <img class="rounded-circle user-post-img " src="${people.data.avatar}" alt="">
                <span class="user-post-name"> &nbsp;${people.data.first_name}</span>
                
                <span style="color:#A8a8a8;">&nbsp;
                    &#x2022; ${Math.floor((Math.random() * 10) + 1) * (people.data.id)}m</span>
            </div>
            <div class='mt-1 pt-2'> <svg aria-label="More options" class="user-post-circles  "
                    color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>
        </div>
        <div class="img-post ">
            <img src="https://source.unsplash.com/random/200x200?sig=${people.data.id}.jpg" class=" card-img-top"
                alt="...">
        </div>
        <div class="card-body p-0 card-body-post">

            <div class="post-icons d-flex">  
                <div>
                    <div class="icon-change heart-icon" id="heart${people.data.id}" onclick="likePost(${people.data.id})"> <i class=" fa-regular fa-heart fa-xl pe-1"
                            style="color: #ffffff; " ></i>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment fa-xl"
                        style="color: #ffffff;"></i>&nbsp;&nbsp;&nbsp;&nbsp;<svg aria-label="Share Post"
                        class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24"
                        role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                            x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                        </polygon>
                    </svg>
                </div>
                <div class="icon-change save-icon " id="s${people.data.id}"  onclick="saveIcone(${people.data.id})"><i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;" id="s${people.data.id}"></i>
                </div>
            </div>

            <!-- Likes -->
            <div class="likes">
                <span class= " counter-likes" id="a${people.data.id}"> ${Math.floor((Math.random() * 120) + 1) * (people.data.id)}
                </span><span>&nbsp; likes</span>
            </div>

            <div class="user-post-name">
                <span> ${people.data.first_name}</span>
            </div>
            <!-- comment -->
            <div class="comment-container">
                <div class="all-comments">View all ${Math.floor((Math.random() * 120) + 1) * (people.data.id)} comments
                </div>

                <div class="user-comment " id="uc${people.data.id}">
                    <!-- script -->
                    <!-- <div class="username-comment ">
                                                <span class=" user-account-username " id="user-account-username">
                                                    chelseafc
                                                </span>
                                                <span class="user-comment-posted">Good</span>
                                            </div> -->
                    <!-- --------------------------------------- -->

                </div>
                <div class="comment">
                    <input type="text" class="comment-box " id="c${people.data.id}" onclick="writeCommentAdd(${people.data.id})" placeholder="Add a comment...">
                    <span class="emoji"><i class="fa-regular fa-face-smile" style="color: #ffffff;"></i></span>
                    <span class="post-comment hidden " id="p${people.data.id}" onclick="postComment(${people.data.id})">post</span>
                </div>
            </div>

        </div>
    </div>
    </div>
</center>
`

    containePostsOne.insertAdjacentHTML('afterend', html);

}



////////////////////////////////////////////// Second Grop of posts  ///////////////////////////////////

const containePostsTwo = document.getElementById("groupPost2")

function populatePostListTwo(people) {

    const html =
        `<center>
    <div class="card bg-black post-card " >
        <div class="user-post d-flex ">
            <div>
                <img class="rounded-circle user-post-img " src="${people.data.avatar}" alt="">
                <span class="user-post-name"> &nbsp;${people.data.first_name}</span>
                
                <span style="color:#A8a8a8;">&nbsp;
                    &#x2022; ${Math.floor((Math.random() * 1) + 1) * (people.data.id)}h</span>
            </div>
            <div class='mt-1 pt-2'> <svg aria-label="More options" class="user-post-circles  "
                    color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24"
                    width="24">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>
        </div>
        <div class="img-post ">
            <img src="https://source.unsplash.com/random/200x200?sig=${people.data.id}.jpg" class=" card-img-top"
                alt="...">
        </div>
        <div class="card-body p-0 card-body-post">

            <div class="post-icons d-flex">
                <div>
                    <div class="icon-change heart-icon " id="heart${people.data.id}" onclick="likePost(${people.data.id})"> <i class=" fa-regular fa-heart fa-xl pe-1"
                            style="color: #ffffff; " ></i>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment fa-xl"
                        style="color: #ffffff;"></i>&nbsp;&nbsp;&nbsp;&nbsp;<svg aria-label="Share Post"
                        class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24"
                        role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22"
                            x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                        </polygon>
                    </svg>
                </div>
                <div class="icon-change save-icon " id="s${people.data.id}" onclick="saveIcone(${people.data.id})"><i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;"></i>
                </div>
            </div>

            <!-- Likes -->
            <div class="likes">
                <span class= " counter-likes" id="a${people.data.id}"> ${Math.floor((Math.random() * 50) + 1) * (people.data.id)}
                </span><span>&nbsp; likes</span>
            </div>

            <div class="user-post-name">
                <span> ${people.data.first_name}</span>
            </div>
            <!-- comment -->
            <div class="comment-container">
                <div class="all-comments">View all ${Math.floor((Math.random() * 120) + 1) * (people.data.id)} comments
                </div>

                <div class="user-comment " id="uc${people.data.id}">
                    <!-- script -->
                    <!-- <div class="username-comment ">
                                                <span class=" user-account-username " id="user-account-username">
                                                    chelseafc
                                                </span>
                                                <span class="user-comment-posted">Good</span>
                                            </div> -->
                    <!-- --------------------------------------- -->

                </div>
                <div class="comment">
                    <input type="text" class="comment-box" id="c${people.data.id}" onclick="writeCommentAdd(${people.data.id})" placeholder="Add a comment...">
                    <span class="emoji"><i class="fa-regular fa-face-smile" style="color: #ffffff;"></i></span>
                    <span class="post-comment hidden " id="p${people.data.id}" onclick="postComment(${people.data.id})">post</span>
                </div>
            </div>

        </div>
    </div>
    </div>
</center>`

    containePostsTwo.insertAdjacentHTML('afterend', html);



}

let i = 1;
while (i <= 11) {
    fetchPosts(i);
    i++;
}



////////////////////////////////////////////// Stories  ///////////////////////////////////

function fetchStory(n) {
    fetch(`https://reqres.in/api/users/${n}`)
        .then((response) => response.json())
        .then((data) => {

            populateStoryList(data);

        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });

}
const containerStory = document.querySelector(".storyCont")

function populateStoryList(people) {
    const html = ` <div class="col-2">
                        <div class="story">
                            <img class="rounded-circle story-img" src=${people.data.avatar} alt="">
                            <span class="text-light  story-name">${people.data.first_name}</span>

                        </div>
                    </div>`


    containerStory.insertAdjacentHTML('beforeend', html);
};

///// To get Shuffle people of Stories
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


var arr = [3, 5, 6, 7, 11, 9];


random = shuffle(arr)
fetchStory(random[0]);
fetchStory(random[1]);
fetchStory(random[3]);
fetchStory(random[4]);
fetchStory(random[5]);
fetchStory(random[2]);















////////////////////////////////////////////// Like post  ///////////////////////////////////

const likePost = function (id) {
    //for fixed post in HTML 
    if (id == null) {
        let likes = document.getElementById("af")
        let likesNumer = Number(likes.textContent);
        let heart = document.getElementById("heart-fixed");
        heart.classList.toggle('liked');
        if (heart.classList.contains('liked')) {
            likesNumer++;
            likes.innerHTML = likesNumer;
            heart.innerHTML = `<i class=" fa-solid fa-heart fa-xl pe-1" style="color: red "></i>`
        } else {
            likesNumer--;
            likes.innerHTML = likesNumer;
            heart.innerHTML = `<i class=" fa-regular fa-heart fa-xl pe-1" style="color: #ffffff; "></i>`
        }
        //Posts from API
    } else {
        let likes = document.getElementById(`a${id}`)
        let likesNumer = Number(likes.textContent);
        let heart = document.getElementById(`heart${id}`);

        heart.classList.toggle('liked');
        if (heart.classList.contains('liked')) {
            likesNumer++;
            likes.innerHTML = likesNumer;
            heart.innerHTML = `<i class=" fa-solid fa-heart fa-xl pe-1" style="color: red "></i>`
        } else {
            likesNumer--;
            likes.innerHTML = likesNumer;
            heart.innerHTML = `<i class=" fa-regular fa-heart fa-xl pe-1" style="color: #ffffff; "></i>`
        }
    }
}






//////////////////////////////////////////////// Save post  ///////////////////////////////////



const saveIcone = function (id) {
    //for fixed post in HTML 

    if (id == null) {
        let saveIcone = document.getElementById("sf")
        saveIcone.classList.toggle('saved');
        if (saveIcone.classList.contains('saved')) {
            saveIcone.innerHTML = `<i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;"></i>`
        } else {
            saveIcone.innerHTML = `<i class="fa-solid fa-bookmark fa-lg" style="color: #ffffff;"></i>`
        }
        //Posts from API

    } else {
        let saveIcone = document.getElementById(`s${id}`)
        saveIcone.classList.toggle('saved');
        if (saveIcone.classList.contains('saved')) {
            saveIcone.innerHTML = `<i class="fa-regular fa-bookmark fa-lg" style="color: #ffffff;"></i>`
        } else {
            saveIcone.innerHTML = `<i class="fa-solid fa-bookmark fa-lg" style="color: #ffffff;"></i>`
        }

    }
}






//////////////////////////////////////////////// comment   ///////////////////////////////////


const writeCommentAdd = function (id) {
    //for fixed post in HTML 

    if (id == null) {
        let addComment = document.getElementById('pf')
        let writeComment = document.getElementById('cf');//inputbox
        addComment.classList.remove("hidden");
    } else {
        //Posts from API
        let addComment = document.getElementById(`p${id}`)
        let writeComment = document.getElementById(`c${id}`);//inputbox
        addComment.classList.remove("hidden");
    }
};
const postComment = function (id) {
    if (id == null) {

        let addComment = document.getElementById('pf');
        let writeComment = document.getElementById('cf');
        comment = writeComment.value;
        writeComment.value = "";
        addComment.classList.add("hidden");
        let commentPosted = document.getElementById('ucf');

        const html = `
                    <div class="username-comment">
                    <span class=" user-account-username ">
                    ${userNameShow}</span>
                    <span class="user-comment-posted">${comment}</span>
                    </div>`

        commentPosted.insertAdjacentHTML('afterend', html);

    } else {
        let addComment = document.getElementById(`p${id}`);
        let writeComment = document.getElementById(`c${id}`);
        comment = writeComment.value;
        writeComment.value = "";
        addComment.classList.add("hidden");
        let commentPosted = document.getElementById(`uc${id}`);

        const html = `
                    <div class="username-comment">
                    <span class=" user-account-username ">
                    ${userNameShow}</span>
                    <span class="user-comment-posted">${comment}</span>
                    </div>`

        commentPosted.insertAdjacentHTML('afterend', html);
    }
};




////////////////////////////////////////////////  Search  ///////////////////////////////////

const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const home = document.querySelector(".home");
const search = document.querySelector('.search-icon');
const searchResultsList = document.querySelector(".serch-people");
const searchResults = document.querySelector('.search-results');
const deleteResult = document.querySelector('.delete-Result');



function openSearchContainer() {
    searchContainer.classList.remove('hidden');

}
function closeSearchContainer() {
    searchContainer.classList.add('hidden');
    deleteResult.remove()

}

searchBtn.addEventListener('click', openSearchContainer)
home.addEventListener('click', closeSearchContainer)

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !searchContainer.classList.contains('hidden')) {
        closeSearchContainer()
    }
});

async function fetchPeopleOne() {
    const response = await fetch('https://reqres.in/api/users/');
    const peopleOne = await response.json();

    return peopleOne;

}
async function fetchPeopleTwo() {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const peopleTwo = await response.json();

    return peopleTwo;

}




async function searchPeople() {
    const searchTerm = document.querySelector('.input-search').value;
    const peopleOne = await fetchPeopleOne();
    const peopleTwo = await fetchPeopleTwo();

    const peopleArrayOne = Object.values(peopleOne.data);
    const matchedPeopleOne = peopleArrayOne.filter(person => {
        return person.first_name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    localStorage.setItem('searchResults', JSON.stringify(matchedPeopleOne));

    if (matchedPeopleOne == "") {

        const peopleArrayTwo = Object.values(peopleTwo.data);

        const matchedPeopleTwo = peopleArrayTwo.filter(person => {
            return person.first_name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        localStorage.setItem('searchResults', JSON.stringify(matchedPeopleTwo));

    }
    const searchResults = JSON.parse(localStorage.getItem("searchResults")) || [];



    searchResults.forEach((result) => {
        const html =
            ` <div class="m-3 search-results">
                    <img class="user-account-img rounded-circle me-2 image-searched "
                        src="${result.avatar}" alt="">
                    <span class="serch-name"> ${result.first_name}</span>
                </div>  `

        searchResultsList.insertAdjacentHTML('beforeend', html);
    })
}

searchInput = document.querySelector('.input-search');
searchInput.addEventListener("input", searchPeople)










