import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [noCategoria, setnoCategoria] = useState(false);

	useEffect(() => {
		getGifs(category);
		return async () => {
			const newImages = await getGifs(category);

			// Si la categoría en la API, no se agrega al componente
			// El estado noCategoría pasar a ser true para poder envíar mensaje en la UI
			if (!newImages.length) {
				setnoCategoria(true);
				return;
			} else {
				setImages(newImages);
				setIsLoading(false);
			}
		};
	}, []);

	return {
		images,
		isLoading,
		noCategoria,
	};
};
