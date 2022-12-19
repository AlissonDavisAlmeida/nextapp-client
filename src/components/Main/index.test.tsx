import { render, screen } from '@testing-library/react';
import { Main } from './index';

describe('Main component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it("should render 'Main' text", () => {
    const mainElement = screen.getByText(/React Avançado/i);
    expect(mainElement).toBeInTheDocument();
  });

  it('should render colors correctly', () => {
    const wrapper = screen.getByTestId('main-wrapper');

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyle({
      backgroundColor: '#06092b',
    });
  });
});
