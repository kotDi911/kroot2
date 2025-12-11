import {create} from 'zustand'

const cgi = process.env.PUBLIC_URL + "/assets/icon/services/cgi_icon.png";
const beauty = process.env.PUBLIC_URL + "/assets/icon/services/beauty_icon.png";
const vfx = process.env.PUBLIC_URL + "/assets/icon/services/vfx_icon.png";
const unreal = process.env.PUBLIC_URL + "/assets/icon/services/ue_icon.png";

export const useServiceCard = create(() => ({
    services: [
        {
            ico: vfx,
            title: "VFX / CGI",
            desc: "Seamless VFX integration – from rotoscoping to compositing.",
            options: [
                {
                    id: 1,
                    text: "Rotoscoping",
                    url: "https://www.youtube.com/watch?v=6e5FLdlb_-k&ab_channel=TheKROOT",
                },
                {
                    id: 2,
                    text: "Matchmove",
                    url: "https://www.youtube.com/watch?v=PjRnq9_Emhs&ab_channel=TheKROOT",
                },
                {
                    id: 3,
                    text: "Clean up",
                    url: "https://www.youtube.com/watch?v=cedH5onBiWA&ab_channel=TheKROOT",
                },
                {
                    id: 4,
                    text: "Compositing",
                    url: "",
                },
                {
                    id: 5,
                    text: "3D modeling",
                    url: "",
                },
                {
                    id: 6,
                    text: "Animation",
                    url: "",
                },
                {
                    id: 7,
                    text: "Particular simulation",
                    url: "",
                },
                {
                    id: 8,
                    text: "Rendering",
                    url: "",
                },
            ]
        },
        {
            ico: beauty,
            title: "Beauty Retouch",
            desc: "Flawless beauty retouching for any project.",
            options: [
                {
                    id: 2,
                    text: "Retouch face",
                    url: "",
                },
                {
                    id: 3,
                    text: "Change shape of the body",
                    url: "",
                },
                {
                    id: 4,
                    text: "From old to young",
                    url: "",
                },
            ]
        },
        {
            ico: unreal,
            title: "Unreal Engine",
            desc: "Unreal Engine-powered environments and cinematics.",
            options: [
                {
                    id: 1,
                    text: "Enviroment",
                    url: "",
                },
                {
                    id: 2,
                    text: "Virtual production",
                    url: "",
                },
                {
                    id: 3,
                    text: "Animation",
                    url: "",
                },
                {
                    id: 4,
                    text: "Cinematics",
                    url: "",
                },
            ]
        },
        {
            ico: cgi,
            title: "AI",
            desc: (<>We use AI-powered tools as part of our creative process —
                to spark ideas,<br/> explore visual directions, and help elevate your project in unexpected ways.
                <br/>
                <br/>
                Reel — coming soon.
            </>),
            options: [
                // {
                //     id: 1,
                //     text: "Reel — coming soon.",
                //     url: "",
                // },
                // {
                //     id:5,
                //     text:"Animation",
                //     url:"",
                // },
                // {
                //     id:6,
                //     text:"Particular simulation",
                //     url:"",
                // },
                // {
                //     id:7,
                //     text:"Rendering",
                //     url:"",
                // },
            ]
        },
    ]
}));