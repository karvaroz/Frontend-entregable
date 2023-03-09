import React, { Fragment, useState } from "react";
import Card from "./Card";

const Form = () => {
	const [book, setBook] = useState({
		title: "",
		author: "",
	});

	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (book.title.trim().length < 3 || book.title.trim() == "") {
			setError(true);
			return;
		}

		if (book.author.trim().length < 6 || book.author.trim() == "") {
			setError(true);
			return;
		}
		setShow(true);
	};

	return (
		<Fragment>
			<div className="signup-form">
				<div className="container">
					<div className="header">
						<h1>Agrega un Libro</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="input">
							<input
								type="text"
								placeholder="Nombre del Libro"
								value={book.title}
								onChange={(e) => setBook({ ...book, title: e.target.value })}
							/>
						</div>
						<div className="input">
							<input
								type="text"
								placeholder="Autor del Libro"
								value={book.author}
								onChange={(e) => setBook({ ...book, author: e.target.value })}
							/>
						</div>
						{error && (
							<p className="errorMsg">
								Por favor chequea que la información sea correcta
							</p>
						)}
						<input
							className="signup-btn"
							type="submit"
							value="Agregar..."
						/>
					</form>
				</div>
			</div>
			{show && (
				<Card
					title={book.title}
					author={book.author}
				/>
			)}
		</Fragment>
	);
};

export default Form;
