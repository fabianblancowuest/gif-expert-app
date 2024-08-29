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
			<header>
				<h1>Gif Expert App</h1>
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
