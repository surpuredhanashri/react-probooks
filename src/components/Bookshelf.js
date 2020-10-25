import React from 'react';
import Book from './Book';

const Bookshelf = props => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books.map(book => (
						<li key={book.id}>
							<Book book={book} movebook={props.movebook} />
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Bookshelf;
