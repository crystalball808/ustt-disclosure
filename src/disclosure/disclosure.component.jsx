import React, { useState } from 'react';
import { Item, Summary, Content} from './styledComponents'
import './rotate.css'

export const Disclosure = ({summary, children}) => {
	const [isVisible,SetIsVisible] = useState(false);

	const handleClick = () => {
		SetIsVisible(!isVisible);
	}

	return <Item>
		<Summary onClick={handleClick}>
			<h5>{summary}</h5>
			<i className={ isVisible ? "fas fa-chevron-up rotate down":"fas fa-chevron-up rotate" }></i>
		</Summary>
		<Content isVisible={isVisible}>
			{children}
		</Content>
	</Item>;
};
