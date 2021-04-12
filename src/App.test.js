import React from 'react';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { shallow, mount } from 'enzyme';

describe("Renders components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders App component with children components", () => {
    const wrapper = shallow(<App />);
    const home = (<Home />);
    const about = (<About />);
    const contact = (<Contact />);

    expect(wrapper.contains(home, about, contact)).toEqual(true);
  });
  it("renders navigation bar", () => {
    const wrapper = mount(<Nav />);
    const nav = wrapper.find("#about").text();
    expect(nav).toEqual("About");
  })
})