// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYfs7ZnlKwAJ46bkkNLpjAa3EfqnIYf-8",
  authDomain: "hackathon-76961.firebaseapp.com",
  projectId: "hackathon-76961",
  storageBucket: "hackathon-76961.appspot.com",
  messagingSenderId: "1062290393211",
  appId: "1:1062290393211:web:76e78c58cb0c65c44b7ade",
  measurementId: "G-ZHYP5N9325"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
document.getElementById('dashboard').style.display='none';
document.getElementById('login').addEventListener('click',GoogleLogin);
document.getElementById('logOut').addEventListener('click',LogoutUser);

var provider = new firebase.auth.GoogleAuthProvider();


function GoogleLogin(){
    console.log('login btn call')
    firebase.auth().signInWithPopup(provider).then(res=>{
        showUserDetails(res.user);
        document.getElementById('loginScreen').style.display='none';
        document.getElementById('dashboard').style.display='block';
        console.log(res)
      
    }).catch(e=>{
         console.log(e)
    })
 
}
     function showUserDetails(user){
       document.getElementById('userDetails').innerHTML=`<img src"${user.photoURL} style=width:10%> <p>Name: ${user.displayName}</p> <p>Email: ${user.email}</p>`;
       
       

}

function LogoutUser(){
    console.log('logout btn call')
    firebase.auth().signOut().then(()=>{
        document.getElementById('loginScreen').style.display='block';
        document.getElementById('dashboard').style.display='none';

    }).catch((e)=>{
        console.log(e)
    })
}

let popped = 0;
var startgame = false;
var score = 0;
var life = 5;
function signup() {
    document.getElementById("create").style.display = "none";
    document.getElementById("login").style.display = "block";
}
function createacc() {
    document.getElementById("create").style.display = "block";
    document.getElementById("login").style.display = "none";

}
function llogin() {
    document.getElementById("level1").style.display = "block";
    document.getElementById("llogin").style.display = "none";
}
function stop() {
    startgame = false;
}level1
function start() {
    startgame = true
}
document.addEventListener('mouseover', (e) => {
    if (startgame) {
        if (e.target.className === "balloon_red") {
            e.target.style.backgroundColor = "#ededed";
            e.target.textContent = "POP!";
            popped++;
            score++;
            document.getElementById("score").innerHTML = score;
            removeEvent(e);
            checkpop();
        }
        else {
            if (e.target.className === "balloon") {

                checklife();
            }
        }
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};
function checklife() {
    life--;
    document.getElementById("life").innerHTML = life;
    if (life === 0) {
        alert("you lost the game")
        var answer = prompt("Can you restart the game then type yes")
        console.log(answer)
        if (answer.toLowerCase === "yes") {
            life = 5
            score = 0
        }
    }
}
function checkpop() {
    if (popped === 15) {
        alert("Go to next level")
        let gallery = document.querySelector('#balloon-gallery');
        gallery.innerHTML = '';
    }
};
