import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { App } from '../src/App';

describe('test <App />', () => {
    describe('test <Counter />',() => {
        let app;
        let counters;

        beforeEach(() => {
            app = TestUtils.renderIntoDocument(<App/>);
            counters = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1');
        });

        it('计数器数量是否等于2', () => {
            expect(counters.length).to.be.equal(2);
        });

        it('计数器类是否为「aihao」', () => {
            expect(counters[0].className).to.be.equal('aihao');
        });

    });
});