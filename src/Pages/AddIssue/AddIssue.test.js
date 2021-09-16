import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddIssue from './AddIssue';
import {Provider} from 'react-redux';
import store from '../../Redux/Store';
import { MemoryRouter } from 'react-router-dom';

describe('AddIssue Page Test Suite', () => {
    beforeEach(()=>{
        
    render(
        <MemoryRouter>   
        <Provider store={store}><AddIssue/></Provider>
        </MemoryRouter> 
        );
    });
    test('AddIssue Snapshot',()=>{
        const tree = renderer.create(<MemoryRouter>   
            <Provider store={store}><AddIssue/></Provider>
            </MemoryRouter> );
        expect(tree).toMatchSnapshot();
      });
      
    test('renders main Heading of AddIssue Page', () => {
        const element = screen.getByText(/Add Issue/i);
        expect(element).toBeInTheDocument();
    });

    test('AddIssue should have inputs', () => {
        expect(screen.getAllByRole('textbox')).toHaveLength(1);
        expect(screen.getAllByRole('combobox')).toHaveLength(1);
        expect(screen.getAllByRole('group')).toHaveLength(1);
    });

    test('AddIssue should have a submit button', () => {
        const submitButton = screen.getByRole('button', { name: 'Submit' });
        expect(submitButton).toBeDefined()
    });

  
})