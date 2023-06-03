"use strict";
window.addEventListener("load",start);

let songList = [
  { artist: "hugo", title: "Whatever", duration: "3:22", upvote: 0 },
  { artist: "amigo", title: "hurra", duration: "5:22", upvote: 0 },
  { artist: "lulu", title: "fødselsdag", duration: "3:52", upvote: 0 },
];

function start(){
    console.log("hej")
    console.log(songList);
    showSongList(songList);
}

function showSongList(list){

    document.querySelector("#songlist").innerHTML="";
    for (const song of list) {
        const html = `
        <li> ${song.title} - ${song.artist} - ${song.duration} ${song.upvote} <button>Upvote</button> </button></li>
        
        `;

        document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
        document.querySelector("#songlist li:last-child button").addEventListener("click", ()=>upvoteSong(song));
    }
}


function upvoteSong(song) {
   
  song.upvote++;

 
  const filteredList = songList.sort((a, b) => b.upvote - a.upvote);
  showSongList(filteredList);
}
// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
// 2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.