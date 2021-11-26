import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from './Header';
import {Provider} from 'react-redux';
import store from '../../Redux/Store';
import {MemoryRouter} from 'react-router-dom';

describe('Header component Page Test Suite', () => {
    beforeEach(()=>{
    render(<MemoryRouter>
        <Provider store={store}><Header/></Provider>
        </MemoryRouter>);
    });
    test('Header component Snapshot',()=>{
        const tree = renderer.create(   
        <MemoryRouter>
        <Provider store={store}><Header/></Provider>
        </MemoryRouter>
            );
        expect(tree).toMatchSnapshot();
      });
      
    test('renders main Brand logo Heading of Header component Page', () => {
        const element = screen.getByText(/Issue Tracker/i);
        expect(element).toBeInTheDocument();
    });

    test('Header component should have About and Top Viewed Issues Links', () => {
        const element1 = screen.getByText(/About/i);
        expect(element1).toBeInTheDocument();
        const element2 = screen.getByText(/Top Viewed Issues/i);
        expect(element2).toBeInTheDocument();
    });

    test('Header component should have Register and Login Links', () => {
        const element1 = screen.getByText(/Register/i);
        expect(element1).toBeInTheDocument();
        const element2 = screen.getByText(/Login/i);
        expect(element2).toBeInTheDocument();
    });

  
})