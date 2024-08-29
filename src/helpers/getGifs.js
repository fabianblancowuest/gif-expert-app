const apiKey = "dgZibQIkzchWPsRhrvDSzNbIHHrfRORF";

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
	const response = await fetch(url);

	const { data = [] } = await response.json();

	let noCategoria = false;
	if (!data.length) {
		noCategoria = true;
	}

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium,
		noCategoria,
	}));

	return gifs;
};
