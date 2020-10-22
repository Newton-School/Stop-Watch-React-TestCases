import Clock from '../components/Clock'
import React from "react";
import { shallow,mount } from "enzyme"



describe('Clock',()=>{
    it('renders without crashing',()=>{
        mount(<Clock/>)
    })
    it('timer is started after start button is pressed',async ()=>{
        
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:false
        })
        ClockComponent.find('#start').simulate('click');
        await Promise.resolve();
        expect(ClockComponent.state("startTimer")).toBe(true)
    })
    it('timer is reset after reset button is pressed',async ()=>{
        
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            second:58,
            minute:58,
            hour:1
        })
        ClockComponent.find('#reset').simulate('click');
        await Promise.resolve();
        expect(ClockComponent.state("second")).toBe(0)
        expect(ClockComponent.state("minute")).toBe(0)
        expect(ClockComponent.state("hour")).toBe(0)
    })
    it('timer is stopped after stop button is pressed',async ()=>{
        
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true
        })
        ClockComponent.find('#stop').simulate('click');
        await Promise.resolve();
        expect(ClockComponent.state("startTimer")).toBe(false)
    })
    it('seconds start increasing after timer is started',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:0
        })
        let defaultsecond = ClockComponent.state('second')+3
        try{
            setInterval(() => {
                let second_to_be_tested = ClockComponent.state('second')
                expect(defaultsecond).toBe(second_to_be_tested)
                done()
                defaultsecond=defaultsecond+3
            }, 3100)
        }
        catch(error){
            done(error)
        }
    })
    it('minutes start increasing after 60 seconds',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:58,
            minute:1
        })
        try{
            setInterval(() => {
                let minutevalue = ClockComponent.state('minute')
                expect(minutevalue).toBe(2)
                done()
            }, 3000)
        }
        catch(error){
            done(error)
        }
    })
    it('hours start increasing after 60 minute',(done)=>{
        const ClockComponent = shallow(<Clock />)
        ClockComponent.setState({
            startTimer:true,
            second:58,
            minute:59,
            hour:1
        })
        try{
            setInterval(() => {
                let hourvalue = ClockComponent.state('hour')
                expect(hourvalue).toBe(2)
                done()
            }, 3000)
        }
        catch(error){
            done(error)
        }
    })
})