import Time from '../Time'
import React from 'react';
import { shallow,mount } from 'enzyme';


describe('Time',()=>{
    it('renders without crashing',()=>{
        mount(<Time hour={2} minute={3} seconds={5} />)
    })
})