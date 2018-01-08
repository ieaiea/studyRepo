import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render() {
		const filter = ['All', 'Active', 'Compelted'];
		const filterView = filter.map(v => (
			<Link to={`/${v}`} key={`${v}_filter`}>{v}</Link>
		));
		
		return (
			<footer className="wrap_footer">
				<span className="count_item">1 items</span>
				<ul className="list_filter">
					{filterView}
				</ul>
			</footer>
		)
	}
}

export default Footer;