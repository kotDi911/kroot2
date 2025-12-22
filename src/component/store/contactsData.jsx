import {create} from 'zustand'

const tel = process.env.PUBLIC_URL + "/assets/icon/social/phone.svg";
const mail = process.env.PUBLIC_URL + "/assets/icon/social/mail.svg";
const Anatoly = process.env.PUBLIC_URL + "/assets/images/team/Anatoly.jpg";
const Billy = process.env.PUBLIC_URL + "/assets/images/team/Billy.jpg";
const Kash = process.env.PUBLIC_URL + "/assets/images/team/Kash.jpg";
const Julia = process.env.PUBLIC_URL + "/assets/images/team/Julia.jpg";
const Alex = process.env.PUBLIC_URL + "/assets/images/team/Alex.jpg";
const Artem = process.env.PUBLIC_URL + "/assets/images/team/Artem.jpg";
const Alena = process.env.PUBLIC_URL + "/assets/images/team/Alena.jpg";
const telAnatoly = process.env.PUBLIC_URL + "/assets/images/contacts/anatoly.png";
const telBilly = process.env.PUBLIC_URL + "/assets/images/contacts/billy.png";
const telKash = process.env.PUBLIC_URL + "/assets/images/contacts/kash.png";
const telJulia = process.env.PUBLIC_URL + "/assets/images/contacts/julia.png";

export const useContacts = create(() => ({
    cards: [
        {
            card: [
                {
                    title: "Contacts",
                    text: "Los Angeles U.S",
                    options: [
                        {text: "Anatoly (Tomash) Kuzmytskyi"},
                        {text: "Executive Producer / Creative"},
                    ],
                    contacts: [
                        {
                            img: tel,
                            img2: telAnatoly,
                            url: "",
                        },
                        {
                            img: mail,
                            text: "tomash@thekroot.com",
                            url: "mailto:tomash@thekroot.com",
                        }
                    ],
                }
            ],
            photo: [
                {
                    area: "photo",
                    img: Anatoly,
                }
            ],
        },
        {
            card: [
                {
                    title: "Contacts",
                    text: "Los Angeles U.S",
                    options: [
                        {text: "Billy Ray"},
                        {text: "Business Development"},
                    ],
                    contacts: [
                        {
                            img: tel,
                            img2: telBilly,
                            url: "",
                        },
                        {
                            img: mail,
                            text: "billy@thekroot.com",
                            url: "mailto:billy@thekroot.com",
                        }
                    ],
                }
            ],
            photo: [
                {
                    area: "photo",
                    img: Billy,
                }
            ],
        },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "Los Angeles U.S",
        //             options: [
        //                 {text: "Kash Band"},
        //                 {text: "Project Manager"},
        //             ],
        //             contacts: [
        //                 {
        //                     img: tel,
        //                     img2: telKash,
        //                     url: "",
        //                 },
        //                 {
        //                     img: mail,
        //                     text: "kash@thekroot.com",
        //                     url: "mailto:kash@thekroot.com",
        //                 }
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo",
        //             img: Anatoly,
        //         }
        //     ],
        // },
        {
            card: [
                {
                    title: "Contacts",
                    text: "Ukraine / Europe",
                    options: [
                        {text: "Julia Lusenko"},
                        {text: "Executive Producer"},
                    ],
                    contacts: [
                        {
                            img: tel,
                            img2: telJulia,
                            url: "",
                        },
                        {
                            img: mail,
                            text: "julia@thekroot.com",
                            url: "mailto:julia@thekroot.com",
                        }
                    ],
                }
            ],
            photo: [
                {
                    area: "photo0",
                    img: Julia,
                }
            ],
        },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "",
        //             options: [
        //                 {text: ""},
        //                 {text: ""},
        //             ],
        //             contacts: [
        //                 {
        //                     img: tel,
        //                     img2: null,
        //                     url: "",
        //                 },
        //                 {
        //                     img: mail,
        //                     text: " office@thekroot.com",
        //                     url: "mailto: office@thekroot.com",
        //                 }
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo0",
        //             img: null,
        //         }
        //     ],
        // },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "",
        //             options: [
        //                 {text: ""},
        //                 {text: ""},
        //             ],
        //             contacts: [
        //                 {
        //                     img: tel,
        //                     img2: null,
        //                     url: "",
        //                 },
        //                 {
        //                     img: mail,
        //                     text: "Kash@thekroot.com",
        //                     url: "mailto:Kash@thekroot.com",
        //                 }
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo0",
        //             img: null,
        //         }
        //     ],
        // },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "Ukraine / Europe",
        //             options: [
        //                 {text: "Alexander Fedirko"},
        //                 {text: "Producer"},
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo1",
        //             img: Alex,
        //         }
        //     ],
        // },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "Kazakhstan / Europe",
        //             options: [
        //                 {text: "Korkishko Artem"},
        //                 {text: "VFX Supervisor"},
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo2",
        //             img: Artem,
        //         }
        //     ],
        // },
        // {
        //     card: [
        //         {
        //             title: "Contacts",
        //             text: "Poiland / Europe",
        //             options: [
        //                 {text: "Alena Kozlova"},
        //                 {text: "3D Supervisor"},
        //             ],
        //         }
        //     ],
        //     photo: [
        //         {
        //             area: "photo3",
        //             img: Alena,
        //         }
        //     ],
        // },
    ],
}));