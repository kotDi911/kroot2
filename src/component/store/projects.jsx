import {create} from "zustand"

// export const useCards = create((set, get) => ({
//         filters: [
//             {name: "all"},
//             {name: "commercial"},
//             {name: "music video"},
//             {name: "beauty"},
//             {name: "animation"},
//             {name: "artwork"},
//             {name: "tv show"},
//         ],
//         projects: [],
//         postsToShow: [],
//         currentPage: 1,
//         setProjectsData: (data) => {
//             set(() => ({projects: [...data]}));
//         },
//         sortFunction: (a, b) => {
//             if (a.id <= 18) {
//                 return a.id - b.id
//             } else {
//                 return b.id - a.id
//             }
//         },
//         addPage: () => {
//             set((state) => ({currentPage: state.currentPage + 1}));
//         },
//         error: null,
//     }))
// ;

export const useCards = create((set, get) => ({
    filters: [
        { name: "all" },
        { name: "commercial" },
        { name: "music video" },
        { name: "beauty" },
        { name: "animation" },
        { name: "artwork" },
        { name: "tv show" },
    ],
    filter: "all",

    projectsAll: [], // все загруженные проекты
    priorityLoaded: false,
    pagesLoaded: new Set(),
    hasMore: true,
    isLoading: false,

    setFilter: (filter) => set({ filter }),

    addProjects: (newProjects, isPriority = false) => {
        const existing = get().projectsAll;

        const filteredNew = newProjects.filter(p => {
            if (p.id) return !existing.some(e => e.id === p.id);
            return !existing.some(e => e.path === p.path);
        });

        let merged;
        if (isPriority) {
            // приоритетные в начало
            merged = [...filteredNew, ...existing];
        } else {
            // обычные в конец
            merged = [...existing, ...filteredNew];
        }
        localStorage.setItem("projects", JSON.stringify(merged))
        set({ projectsAll: merged, priorityLoaded: isPriority || get().priorityLoaded });
    },

    markPageLoaded: (page) => {
        const pages = new Set(get().pagesLoaded);
        pages.add(page);
        set({ pagesLoaded: pages });
    },

    setHasMore: (bool) => set({ hasMore: bool }),
    setIsLoading: (bool) => set({ isLoading: bool }),
    setPriorityLoaded: (bool) => set({ priorityLoaded: bool })
}));
