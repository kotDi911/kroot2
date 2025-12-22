import {create} from "zustand"

export const useUrl = create(() => ({
    mainUrl: "https://thekroot.com/",
    projectsUrl: "https://thekroot.com/data_projects/",
    showReelUrl: "https://thekroot.com/showreel/",

    URL: "https://thekroot.com/",
    URL_API: "https://api.thekroot.com/wp-json/acf/v3/",
    API_PRIORITY_PROJECTS: "https://api.thekroot.com/wp-json/acf/v3/priority_project?per_page=18",
    API_PROJECTS: "https://api.thekroot.com/wp-json/acf/v3/project?per_page=6&page=", //?per_page=9&page=
}))