//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ title, author }) {
	return (
		<div className="signup-form">
			<h2 className="success">Libro agregado</h2>
			<h3>Titulo: {title}</h3>
			<h3>Autor: {author}</h3>
		</div>
	);
}

export default Card;
