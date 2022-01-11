import { render } from '@testing-library/react';
import { Component } from './component';

describe('component', () => {
  it('should render correctly', () => {
    const { container } = render(<Component />);
    expect(container).toBeInTheDocument();
    // expect(container).toMatchSnapshot();
  });
});
