
async function fechProfileData() {
    const url = `https://raw.githubusercontent.com/jonas-holanda/portfolio/main/data/profile.json`;
    const fetching = await fetch(url);
    return await fetching.json();
}