import { useState } from "react";
import "./../../index.css";
import { AddCategory, Footer, GifGrid } from "./";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		const categoriesLower = categories.map((category) =>
			category.toLowerCase(),
		);

		!categoriesLower.includes(newCategory.toLowerCase()) &&
			setCategories([newCategory, ...categories]);
	};

	return (
		<div className="section">
			<header className="header">
				<h1 className="title">Gif Expert App</h1>
				<img
					className="giphy-header"
					src="/src/assets/images/giphy/vertical_animado_chico.gif"
					alt="Logo Giphy Vertical"
				></img>
				<AddCategory onNewCategory={onAddCategory} />
				<img
					className="giphy-busqueda"
					src="/src/assets/images/giphy/horizontal_negro_chico.png"
					alt="Logo Giphy Horizontal"
				></img>
			</header>
			<main className="main">
				{!categories.length && (
					<div className="contenedor-bienvenida">
						<h2 className="mensaje-bienvenida">
							Bienvenido a Gif Expert App, busque su gifs, puede buscar
							cualquier tipo de gifs.
						</h2>
						<img
							className="giphy-mensaje"
							src="/src/assets/images/giphy/vertical_animado_grande.gif"
							alt="Logo Giphy Vertical"
						></img>
					</div>
				)}
				{categories.map((category) => (
					<GifGrid
						key={category}
						category={category}
						categories={categories}
						setCategories={setCategories}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
};
