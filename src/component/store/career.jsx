import { create } from 'zustand';

const getAppImagePath = (name) => process.env.PUBLIC_URL + `/assets/icon/apps/${name}.png`;

export const useCareer = create((set, get) => ({
    vacancy: [],
    us: [],
    ua: [],
    eu: [],
    error: null,
    apps: [
        { name: "blender", img: getAppImagePath("blender") },
        { name: "Maya 3D max", img: getAppImagePath("max") },
        { name: "Cinema 4D", img: getAppImagePath("cinema") },
        { name: "Redshift", img: getAppImagePath("red") },
        { name: "PF Track", img: getAppImagePath("pf") },
        { name: "After Effect", img: getAppImagePath("ae") },
        { name: "Unreal Engine", img: getAppImagePath("unreal") },
    ],

    fetchVacancy: async () => {
        try {
            const resVacancy = await fetch("https://api.thekroot.com/wp-json/acf/v3/career?per_page=50");
            if (!resVacancy.ok) throw new Response("Failed to fetch vacancies.", {status: 404, statusText: "Failed to fetch vacancies."})

            const data = await resVacancy.json();
            if (!data || data.length === 0) throw new Response("No vacancies found.", {status: 404, statusText: "No vacancies found."})

            const vac = data.map(res => res.acf);
            const us = vac.filter((item) => item.nav === "US");
            const ua = vac.filter((item) => item.nav === "UA");
            const eu = vac.filter((item) => item.nav === "EU");

            set({
                vacancy: vac,
                us,
                ua,
                eu,
                error: null,
            });
        } catch (err) {
            set({error: {status: err.status, msg: err.statusText}})
            console.error('Error fetching vacancies:', err.statusText, err.status);
        }
    },
    setError: (err)=>{
        if(err){
            set({error: {status: 404, msg: "No vacancies found."}})
        }else {
            set({error: null})
        }
    }
}));
