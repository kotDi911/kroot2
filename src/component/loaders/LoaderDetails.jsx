export const loaderDetails = async ({params}) => {
    const url1 = "https://api.thekroot.com/wp-json/wp/v2/priority_project?slug=";
    const url2 = "https://api.thekroot.com/wp-json/wp/v2/project?slug=";
    const projects = JSON.parse(localStorage.getItem("projects"));
    const fetchData = async (url) => {
        try {
            const res = await fetch(
                url + params.name.replace(/[&'\s_]+/g, '-').replace(/-+/g, '-')
            );
            if (!res.ok) throw new Error('Failed to fetch data');
            const result = await res.json();
            if (result.length === 0) throw new Error('Project not found');
            let data = {}
            result.find(item => data = item.acf);
            result.find(item => {
                console.log(data)
                console.log(item.acf)
            });
            return data;
        } catch (err) {
            return null;
        }
    };

    if (projects) {
        const foundProject = projects.find(item =>
            item.project_name.replace(/[^a-zA-Z0-9&']+/g, '_').toLowerCase() === params.name
        );
        if (foundProject) {
            return {...foundProject, error: null};
        }
    }
    try {
        const projectFromApi = await fetchData(url1) || await fetchData(url2);
        if (projectFromApi) {
            return projectFromApi;
        } else {
            throw new Response('No project found', {status: "404", statusText: "No project found"});
        }
    } catch (err) {
        throw new Response(err.statusText, {status: err.status, statusText: err.statusText});
    }
}