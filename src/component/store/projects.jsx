import {create} from "zustand"

export const useCards = create((set, get) => ({
        filters: [
            {name: "all"},
            {name: "commercial"},
            {name: "music video"},
            {name: "beauty"},
            {name: "animation"},
            {name: "artwork"},
            {name: "tv show"},
        ],
        projects: [],
        postsToShow: [],
        currentPage: 1,
        setProjectsData: (data) => {
            set(() => ({projects: [...data]}));
        },
        sortFunction: (a, b) => {
            if (a.id <= 18) {
                return a.id - b.id
            } else {
                return b.id - a.id
            }
        },
        addPage: () => {
            set((state) => ({currentPage: state.currentPage + 1}));
        },
        error: null,
    }))
;