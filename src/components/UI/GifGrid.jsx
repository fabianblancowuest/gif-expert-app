import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "./../../index.css";

export const GifGrid = ({ category, categories, setCategories }) => {
	const { images, isLoading, noCategoria } = useFetchGifs(category);

	const handleRemove = (event) => {
		const filteredCategories = categories.filter(
			(item) => item !== event.target.name,
		);

		setCategories([...filteredCategories]);
	};

	return (
		<section className="categoria">
			<div className="header-card">
				<h3 className="titulo-categoria">{category}</h3>
				<button
					title="Eliminar Categoría"
					className="btn-eliminar"
					onClick={handleRemove}
				>
					<img
						className="ico-eliminar"
						src="/src/assets/images/icons/icono-eliminar-100.png"
						name={category}
						alt="Botón descargar"
					></img>
				</button>
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
