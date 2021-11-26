import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from './Login';
import {Provider} from 'react-redux';
import store from '../../Redux/Store';
import { MemoryRouter } from 'react-router-dom';

describe('Login page Page Test Suite', () => {
    beforeEach(()=>{
        
    render(
        <MemoryRouter>   
        <Provider store={store}><Login/></Provider>
        </MemoryRouter> 
        );
    });
    test('Login page Snapshot',()=>{
        const tree = renderer.create(<MemoryRouter>   
            <Provider store={store}><Login/></Provider>
            </MemoryRouter> );
        expect(tree).toMatchSnapshot();
      });
      
    test('renders main Heading of Login page Page', () => {
        const element = screen.getByText(/Login/i);
        expect(element).toBeInTheDocument();
    });

    test('Login page should have inputs', () => {
        expect(screen.getAllByRole('textbox')).toHaveLength(1);
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    });

    test('Login page should have a submit button', () => {
        const submitButton = screen.getByRole('button', { name: 'Sign in' });
        expect(submitButton).toBeDefined()
    });

  
})