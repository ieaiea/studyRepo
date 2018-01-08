import React from 'react';
import {Detail} from '../../components';

class DetailContainer extends React.Component {
	render() {
		const {match} = this.props;
		const paramId = match.params.id;
		const data = {'title' : '자바스트립트란?' , 'date' : '2017-08-20'};
		return (
			<Detail data={data}/>
		)
	}
}

export default DetailContainer;