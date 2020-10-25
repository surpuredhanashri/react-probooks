import React from 'react';

const List = props => {
	return (
		<select onChange={props.movebook} value={props.rstate}>
			<option value="move" disabled>
				Move to...
			</option>
			<option value="currentlyReading">Reading</option>
			<option value="wantToRead">Like &#128077;</option>
			<option value="read">Dislike &#128078;</option>
			<option value="none">Delete &#128544;</option>
		</select>
	);
};

export default List;
