import { render, screen } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Button } from '.';
describe('<Button />', () => {
    it('text', () => {
        render(<Button text="Load more" />)
        expect.assertions();
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);
        //fireEvent.click(button);

        expect(fn).toHaveBeenCalled();

    });

    it('should cbe disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i });
        userEvent.click(button);

        expect(fn).toBeDisabled();

    });
});