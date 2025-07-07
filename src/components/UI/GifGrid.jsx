import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "./../../index.css";
import { useState } from "react";

export const GifGrid = ({ category, categories, setCategories }) => {
	const { images, isLoading, noCategoria } = useFetchGifs(category);
	const [desvanecer, setDesvanecer] = useState(false);

	const handleRemove = (event) => {
		const filteredCategories = categories.filter(
			(item) => item !== event.target.name,
		);

		setTimeout(() => {
			setCategories([...filteredCategories]);
		}, 200);
	};

	return (
		<section className={`categoria ${desvanecer}`}>
			<div className="header-card">
				<h3 className="titulo-categoria">{category}</h3>
				<img
					title="Eliminar Categoría"
					// className="btn-eliminar"
					onClick={(e) => {
						setDesvanecer(true);
						handleRemove(e);
					}}
					className="ico-eliminar"
					src="/assets/images/icons/icono-eliminar-100.png"
					name={category}
					alt="Botón descargar"
				></img>
			</div>
			<div>
				{isLoading && <h2>Cargando...</h2>}
				<article className="card-grid">
					{noCategoria && (
						<p className="no-categoria">
							¡Upps! No se encontró esa categoría 😬
						</p>
					)}
					{images.map((img) => (
						<GifCard key={img.id} {...img} />
					))}
				</article>
			</div>
		</section>
	);
};
