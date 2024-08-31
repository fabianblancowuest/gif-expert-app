import "../../index.css";

export const GifCard = ({ url: { url }, title }, giphyPageUrl) => {
	// const handleDownload = async () => {
	// 	try {
	// 		const response = await fetch(url, { mode: "cors" });
	// 		const blob = await response.blob();
	// 		const link = document.createElement("a");
	// 		link.href = URL.createObjectURL(blob);
	// 		link.download = title || "downloaded-image";
	// 		document.body.appendChild(link);
	// 		link.click();
	// 		document.body.removeChild(link);
	// 		URL.revokeObjectURL(link.href);
	// 	} catch (error) {
	// 		console.error("Error al descargar la imagen:", error);
	// 	}
	// };

	return (
		<div className="card">
			<img className="img" src={url} alt={title} />
			<p>{title}</p>
			<img
				className="img-footer-card"
				src="/src/assets/images/giphy/horizontal_statico_chico.png"
				alt="logo-giphy-chico"
			></img>
			{/* <a href={giphyPageUrl} target="_blank" rel="noopener noreferrer">
				View on GIPHY
			</a> */}
			{/* <button className="btn-descargar-img" onClick={handleDownload}>
				<img
					className="icono-descargar"
					src="/src/assets/images/icons/descargar.png"
					alt="botón descargar"
				></img>
			</button> */}
		</div>
	);
};
