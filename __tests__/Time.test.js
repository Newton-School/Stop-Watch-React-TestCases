import React from 'react';
import { mount } from 'enzyme';
import Time from "../components/Time";

describe('Time',()=>{
    it('renders without crashing',()=>{
        mount(<Time hour={2} minute={3} seconds={5} />)
    })
})