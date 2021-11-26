import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Register from './Register';
import {Provider} from 'react-redux';
import store from '../../Redux/Store';
import { MemoryRouter } from 'react-router-dom';

describe('Register page Page Test Suite', () => {
    beforeEach(()=>{
        
    render(
        <MemoryRouter>   
        <Provider store={store}><Register/></Provider>
        </MemoryRouter> 
        );
    });
    test('Register page Snapshot',()=>{
        const tree = renderer.create(<MemoryRouter>   
            <Provider store={store}><Register/></Provider>
            </MemoryRouter> );
        expect(tree).toMatchSnapshot();
      });
      
    test('renders main Heading of Register page Page', () => {
        const element = screen.getByRole('button', { role:3 });;
        expect(element).toBeInTheDocument();
    });

    test('Register page should have inputs', () => {
        expect(screen.getAllByRole('textbox')).toHaveLength(4);
        expect(screen.getAllByRole('spinbutton')).toHaveLength(1);
    });

    test('Register page should have a submit button', () => {
        const submitButton = screen.getByRole('button', { name: 'Register' });
        expect(submitButton).toBeDefined()
    });

  
})