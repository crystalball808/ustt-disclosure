import React from 'react';

import { Disclosure } from '../disclosure';

const test1 = `Governments around the world spend an estimated US$9.5 trillion through contracts every year. 
Yet, contracting information is often unavailable for public scrutiny.

The Open Contracting Data Standard (OCDS) enables disclosure of data and documents at all stages of the contracting process 
by defining a common data model. It was created to support organizations to increase contracting transparency, 
and allow deeper analysis of contracting data by a wide range of users.
vxcvxcvxcvxcvxcvxcv`

const test2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus nisi vel velit, laborum molestias at numquam debitis aliquam nostrum repellendus recusandae illo officia omnis quis quia quaerat voluptates optio.`


export const App = () => {
	return (
		<>
		<Disclosure summary="Open Contracting Data Standard">
			<p>
				{test1}
			</p>
		</Disclosure>
		<Disclosure summary="Lorem">
			<p>
				{test2}
			</p>
		</Disclosure>
		</>
	);
};
