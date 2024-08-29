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
					className="giphy-title"
					src="/src/assets/images/PoweredBy_640_Horizontal_Light-Backgrounds_With_Logo.gif"
				></img>
				<img
					className="giphy-header"
					src="/src/assets/images/PoweredBy_640_Horizontal_Light-Backgrounds_With_Logo.gif"
				></img>
				<AddCategory onNewCategory={onAddCategory} />
			</header>
			<main className="main">
				{!categories.length && (
					<h2 className="mensaje-bienvenida">
						Bienvenido a Gif Expert App, busque su gifs, puede buscar cualquier
						tipo de gifs.
					</h2>
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
