import React, { useState } from 'react';
import { Item, Summary, Content} from './styledComponents'


export const Disclosure = ({summary, children}) => {
	const [isVisible,SetIsVisible] = useState(false);

	const handleClick = () => {
		SetIsVisible(!isVisible);
	}

	return <Item>
		<Summary onClick={handleClick} isVisible={isVisible}>
			<h5>{summary}</h5>
			<i className="fas fa-chevron-up"></i>
		</Summary>
		<Content isVisible={isVisible}>
			{children}
		</Content>
	</Item>;
};
