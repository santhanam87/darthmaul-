import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import AppName from './name';

describe('<AppName/>', () => {
	it('should render with given name', () => {
		render(<AppName inputName={'Application Name'} />);
		expect(screen.queryByText('Application Name')).toBeInTheDocument();
	});
});
