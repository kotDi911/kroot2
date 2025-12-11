import {create} from 'zustand'

// let g_kroot = process.env.PUBLIC_URL + "/assets/g_kroot/video/";
// let projects = process.env.PUBLIC_URL + "/assets/video/showreel/projects/";

let g_kroot = "https://thekroot.com/assets/g_kroot/video";
let projects = "https://thekroot.com/assets/video/showreel/projects";

export const useAbout = create(() => ({
    nominations: [
        {
            title: "RED ROCK FILM FESTIVAL BEST VISUAL EFFECT",
            name: "– The Ghost of Los Angeles (2023)"
        },
        {
            title: "MTV AWARDS WINNER BEST LATIN",
            name: "– Billie Eilish, ROSALÍA - Lo Vas A Olvidar (2021)"
        },
        {
            title: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            name: "– Coldplay - Up&Up(2016)"
        },
        {
            title: "MTV AWARDS WINNER BEST VISUAL EFFECT",
            name: "– Justine Bieber - Where Are U Now (2015)"
        },
    ],
    numbers: [
        {
            black: "15",
            gray: "+",
            desc: "YEARS OF EXPERIENCE"
        },
        {
            black: "70",
            gray: "+",
            desc: "projects done"
        },
        {
            black: "35",
            gray: null,
            desc: "artist"
        },
        {
            black: "4",
            gray: null,
            desc: "won nomination"
        }
    ],
    options: [
        {name: "3D"},
        {name: "Compositing"},
        {name: "Clean up"},
        {name: "Rotoscoping"},
        {name: "Matchmoving"},
    ],
    cards: [
        {
            url: "/projects",
            name: "projects",
            title: "See our",
            gray: "last work",
            btnText: "all projects",
            path: projects,
        },
        {
            url: "/generation_kroot",
            name: "g-kroot",
            title: "Generation",
            gray: "Kroot",
            btnText: "generation kroot",
            path: g_kroot,
        },
    ]
}));