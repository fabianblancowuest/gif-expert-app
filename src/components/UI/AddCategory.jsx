import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		inputValue.trim().length &&
			// setCategories((categories) => [inputValue, ...categories]);
			onNewCategory(inputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="contenedor-busqueda">
				<input
					type="text"
					placeholder="Buscar gifs"
					value={inputValue}
					onChange={onInputChange}
				/>
				<img
					className="icono-busqueda"
					src="/src/assets/images/icons/busqueda.png"
					alt="icono-busqueda"
					onClick={handleSubmit}
				></img>
			</div>
		</form>
	);
};
