export const getVillains = () => {
	return axios.get("api/villains");
};

export const getHeros = () => {
	return axios.get("api/heros");
};
