import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from './About';

describe('About Page Test Suite', () => {

    test('About Snapshot',()=>{
        const tree = renderer.create(<About/>);
        expect(tree).toMatchSnapshot();
      });
      
    test('renders main Heading of About Page', () => {
        render(<About/>);
        const linkElement = screen.getByText(/About Our Project/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Salient Features Heading of About Page', () => {
        render(<About/>);
        const linkElement = screen.getByText(/Salient Features/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Description Heading of About Page', () => {
        render(<About/>);
        const linkElement = screen.getByText('Description');
        expect(linkElement).toBeInTheDocument();
    });

  
})