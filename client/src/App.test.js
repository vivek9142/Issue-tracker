import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import {Provider} from 'react-redux';
import store from './Redux/Store';

describe('App Test Suite', () => {

  test('renders Footer present in App', () => {
    render(<Provider store={store}><App/></Provider>);
    const linkElement = screen.getByText(/Issue Tracker/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('App Snapshot',()=>{
    const tree = renderer.create(<Provider store={store}><App/></Provider>);
    expect(tree).toMatchSnapshot();
  });
})

