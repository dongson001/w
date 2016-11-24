import React from 'react';
import { render } from 'react-dom';
import Hello from './component';
import styles from './styles.less';

render(
	<Hello />,
	document.getElementById('root')
)