import {create} from 'zustand'

// let g_kroot = process.env.PUBLIC_URL + "/assets/g_kroot/video/";
// let projects = process.env.PUBLIC_URL + "/assets/video/showreel/projects/";
const URL = process.env.PUBLIC_URL + "/assets/images/logos/";
let g_kroot = "https://thekroot.com/assets/g_kroot/video";
let projects = "https://thekroot.com/assets/video/showreel/projects";
let rock = URL + "ROCK.jpg";
let canes = URL + "CANES.jpg";
let ciclope = URL + "CICLOPE.jpg";
let berlin = URL + "BERLIN.jpg";
let lia = URL + "LIA.jpg";
let mtv = URL + "MTV.jpg";
let mva = URL + "UA_MVA.jpg";

export const useAbout = create(() => ({
    nominations: [
        {
            year: "2023",
            img: rock,
            alt: "Red Rock logo",
            title: "Red Rock Film Festival",
            nominated: "Best Visual Effect",
            project: "The Ghost of Los Angeles",
            status: "Winner"
        },
        {
            year: "2021",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Latin",
            project: "Billie Eilish, ROSALÍA - Lo Vas A Olvidar",
            status: "Winner"
        },
        {
            year: "2019",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "Dj Khaled ft SZA - Just Us",
            status: "Nominated"
        },
        {
            year: "2017",
            img: berlin,
            alt: "Berlin Music logo",
            title: "Berlin Music Video Awards",
            nominated: "Best Visual Effect",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2017",
            img: canes,
            alt: "Cannes Festival logo",
            title: "Cannes Lions International Festival of Creativity",
            nominated: "Entertaiment Lion For Music - Silver Lion",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2017",
            img: canes,
            alt: "Cannes Festival logo",
            title: "Cannes Lions International Festival of Creativity",
            nominated: "Film Craft - Silver Lion",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2016",
            img: lia,
            alt: "London Awards logo",
            title: "London International Awards",
            nominated: "Grand LIA",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2016",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2016",
            img: mva,
            alt: "UK Music logo",
            title: "UK Music Video Awards",
            nominated: "Best Visual Effect",
            project: "Coldplay - Up&Up",
            status: "Nominated"
        },
        {
            year: "2016",
            img: ciclope,
            alt: "Ciclope Festival logo",
            title: "Ciclope International Festival of Craft",
            nominated: "Best Visual Effect",
            project: "Coldplay - Up&Up",
            status: "Winner"
        },
        {
            year: "2015",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "The Creator - Fucking Young/Death Camp",
            status: "Nominated"
        },
        {
            year: "2015",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "FKA Twigs - Two Weeks",
            status: "Nominated"
        },
        {
            year: "2015",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "Childish Gambino - Telegraph Ave",
            status: "Nominated"
        },
        {
            year: "2015",
            img: mtv,
            alt: "MTV logo",
            title: "MTV Video Music Awards",
            nominated: "Best Visual Effect",
            project: "Skrillex & Diplo feat. Justine Bieber - Where Are U Now",
            status: "Winner"
        },
        {
            year: "2013",
            img: mva,
            alt: "UK Music logo",
            title: "UK Music Video Awards",
            nominated: "Best Visual Effect",
            project: "Foals - Bad Habit",
            status: "Nominated"
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
            black: "9",
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

// nominations: [
//     {
//         title: "RED ROCK FILM FESTIVAL BEST VISUAL EFFECT",
//         name: "– The Ghost of Los Angeles (2023)"
//     },
//     {
//         title: "MTV AWARDS WINNER BEST LATIN",
//         name: "– Billie Eilish, ROSALÍA - Lo Vas A Olvidar (2021)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "– Dj Khaled ft SZA - Just Us (2019)"
//     },
//     {
//         title: "BERLIN MUSIC VIDEO AWARDS WINNER BEST VISUAL EFFECT",
//         name: "– Coldplay - Up&Up (2017)"
//     },
//     {
//         title: "CANNES LION INTERNATIONAL FESTIVAL OF CREATIVITY WINNER ENTERTAIMENT LION FOR MUSIC - SILVER LION",
//         name: "– Coldplay - Up&Up (2017)"
//     },
//     {
//         title: "CANNES LION INTERNATIONAL FESTIVAL OF CREATIVITY WINNER FILM CRAFT - SILVER LION",
//         name: "– Coldplay - Up&Up (2017)"
//     },
//     {
//         title: "LONDON INTERNATIONAL AWARDS WINNER GRAND LIA",
//         name: "– Coldplay - Up&Up (2016)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS WINNER BEST VISUAL EFFECT",
//         name: "- Coldplay - Up&Up (2016)"
//     },
//     {
//         title: "UK MUSIC VIDEO AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "- Coldplay - Up&Up (2016)"
//     },
//     {
//         title: "CICLOPE INTERNATIONAL FESTIVAL OF CRAFT WINNER BEST VISUAL EFFECT",
//         name: "- Coldplay - Up&Up (2016)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "– The Creator - Fucking Young/Death Camp (2015)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "– FKA Twigs - Two Weeks (2015)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "– Childish Gambino - Telegraph Ave (2015)"
//     },
//     {
//         title: "MTV VIDEO MUSIC AWARDS WINNER BEST VISUAL EFFECT",
//         name: "– Skrillex & Diplo feat. Justine Bieber - Where Are U Now (2015)"
//     },
//     {
//         title: "UK MUSIC VIDEO AWARDS NOMINATED BEST VISUAL EFFECT",
//         name: "– Foals - Bad Habit (2013)"
//     },
// ],