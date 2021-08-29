import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event';
import App from './App'
import { waitFor } from '@testing-library/react';

describe('App TestSuite', () => {
    test('UserForm has an Add User button', () => {
        render(<App />);
        const addButton = screen.getByRole('button', { name: 'Add User' });
        expect(addButton).toBeVisible();
        //  expect(addButton).toBeEnabled();
    })

    test('UserForm 2 text input elements', () => {
        render(<App />);
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
    })

    // https://testing-library.com/docs/ecosystem-user-event
    // To trigger an event, fireEvent can be used, but userEvent is preferred over  fireEvent.
    test('Allows to add user on inputting name and location', async () => {
        render(<App />);
        const nameInputField = screen.getByLabelText("Enter name:");
        userEvent.type(nameInputField, 'User3');
        const locationInputField = screen.getByLabelText("Enter location:");
        userEvent.type(locationInputField, 'Location3');
        const addButton = screen.getByRole('button', { name: 'Add User' });
        userEvent.click(addButton);
/*        
        await waitFor(() => {
            const userList = screen.getAllByRole('listitem');
            const userInfo = userList.map(element => element.innerHTML);
            expect(userInfo).toEqual(['User1, Location1', 'User2, Location2', 'User3, Location3'])
        });
*/
        await waitFor(async () => {
            const userList = await screen.findAllByRole('listitem')
            console.log(userList);
            const userInfo = userList.map(element => element.innerHTML.trim())
            expect(userInfo).toEqual(['User1, Location1', 'User2, Location2', 'User3, Location3']);
        });
    })
});

