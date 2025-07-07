// const giphyApiKey = "dgZibQIkzchWPsRhrvDSzNbIHHrfRORF";

// const tenorApiKey = "AIzaSyC9AdWNseKB4AEsCNF7_pStvw1Z15CxfAk";

// export const getGifs = async (category) => {
// 	const url = `https://api.giphy.com/v1/gifs/search?api_key=${tenorApiKey}&q=${category}&limit=20`;
// 	const response = await fetch(url);

// 	const { data = [] } = await response.json();

// 	let noCategoria = false;
// 	if (!data.length) {
// 		noCategoria = true;
// 	}

// 	const gifs = data.map((img) => ({
// 		id: img.id,
// 		title: img.title,
// 		url: img.images.downsized_medium,
// 		noCategoria,
// 	}));

// 	return gifs;
// };

const tenorApiKey = "AIzaSyC9AdWNseKB4AEsCNF7_pStvw1Z15CxfAk";

export const getGifs = async (category) => {
	const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(
		category,
	)}&key=${tenorApiKey}&limit=20&media_filter=gif`;

	try {
		const response = await fetch(url);
		const { results = [] } = await response.json();

		let noCategoria = false;
		if (!results.length) {
			noCategoria = true;
		}

		const gifs = results.map((gif) => ({
			id: gif.id,
			title: gif.content_description || category,
			url: gif.media_formats.gif.url,
			noCategoria,
		}));

		return gifs;
	} catch (error) {
		console.error("Error al obtener GIFs de Tenor:", error);
		return [];
	}
};
