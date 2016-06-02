import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { App } from '../src/app';

describe('test <App />', () => {
    describe('test <Counter />',() => {
        let app;
        let counters;

        before(() => {
            app = TestUtils.renderIntoDocument(<App/>);
            counters = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1');
        });

        it('计数器数量是否等于2', () => {
            expect(counters.length).to.be.equal(2);
        });

        it('计数器类是否为「aihao」', () => {
            expect(counters[0].className).to.be.equal('aihao');
        });

        after(() => {
            let appNode = ReactDOM.findDOMNode(app);
            ReactDOM.unmountComponentAtNode(appNode.parentNode);
        });


    });
});