import React, { Fragment, useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import * as nt from '../src/index';

/** @jsx ntH */
const ntH = nt.bind(React.createElement, { Fragment });

nt.registerElement('p-in-div', (props, children, { h }) => <div {...props}>{h('p', null, ...children)}</div>);

const TestPinDiv = props => {
  return <p-in-div>test</p-in-div>;
};

describe('custom elements', function() {
  const app = mount(<TestPinDiv />);

  it('p-in-div', () => {
    expect(app.html()).toContain('<p>test</p>');
  });
});
