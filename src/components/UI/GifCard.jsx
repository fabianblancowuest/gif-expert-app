import "../../index.css";

export const GifCard = ({ url: { url }, title }) => {
	return (
		<div className="card">
			<img className="img" src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
