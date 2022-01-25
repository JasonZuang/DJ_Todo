import React from "react";

const Book = (props) => {
	const { img, title, author } = props;
	//atribute, eventHandler
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("hello world");
	};
	const complexEx = (author) => {
		console.log(author);
	};
	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<Image img={img} />
			<Title title={title} />
			<Author author={author} />
			<button type="button" onClick={clickHandler}>
				Button
			</button>
			<button
				className="complex"
				type="button"
				onClick={() => {
					complexEx(author);
				}}
			>
				Complex Example
			</button>
		</article>
	);
};

const Image = (props) => {
	return <img src={props.img} alt="" />;
};

const Author = (props) => {
	return (
		<p style={{ color: "#8934a1", fontSize: "0.75rem" }}>{props.author} </p>
	);
};

const Title = (props) => {
	return (
		<h1
			style={{ color: "#617d98", fontSize: "1rem", marginTop: "0.75rem" }}
			onClick={() => {
				console.log(props.title);
			}}
		>
			{props.title}
		</h1>
	);
};

export default Book;
