import { create } from 'zustand';

// const URL = process.env.PUBLIC_URL + "/assets/video/showreel/";
const URL = "https://thekroot.com/assets/video/showreel";
const mtv = process.env.PUBLIC_URL + "/assets/images/mtv.jpg";

export const useHomeCard = create(() => ({
    data: [
        {
            id: 0,
            name: "main",
            url: "https://www.youtube.com/watch?v=revY_dUkhkc",
            path: `${URL}/main`,
            btnText: "main showreel",
        },
        {
            id: 1,
            name: "commercial",
            url: "https://www.youtube.com/watch?v=m9zhPKXm1lc&ab_channel=TheKROOT",
            path: `${URL}/commercial`,
            btnText: "commercial showreel",
        },
        {
            id: 2,
            name: "music",
            url: "https://www.youtube.com/watch?v=0kva06IWbYw&ab_channel=TheKROOT",
            path: `${URL}/music`,
            btnText: "music video showreel",
        },
        {
            id: 3,
            name: "beauty",
            url: "https://www.youtube.com/watch?v=GXskclwDBCA&ab_channel=TheKROOT",
            path: `${URL}/beauty`,
            btnText: "beauty vfx",
        },
        {
            id: 4,
            name: "about",
            url: "about",
            title: "MTV Award Winning",
            description: "The Kroot is Visual Effects and Animation studios.\n" +
                "We based in Los Angeles.\n" +
                "An important aspect of our job - is to show creativity, using the latest technology and radical ideas that the world hasn’t seen before. Our motto is “You are Rad!“",
            end: "Best Visual Effect",
            img: mtv,
            btnText: "",
        },
        {
            id: 5,
            name: "projects",
            url: "projects",
            path: `${URL}/projects`,
            btnText: "projects",
        },
    ]
}));
