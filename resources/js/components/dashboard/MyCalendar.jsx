import React, { Component, useCallback,useEffect,useState } from 'react';
import { Calendar,momentLocalizer } from 'react-big-calendar';
import {connect} from 'react-redux';
import moment from 'moment';
import {addEvent,getEvents,dropEvent} from '@/Store/actions';

const localizer = momentLocalizer(moment);  

class MyCalendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      events:[],
    }

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
    this.handleSelectSlot = this.handleSelectSlot.bind(this);
    
  }

  componentDidMount() {
    this.props.getEvents()
  }
  
  
  static getDerivedStateFromProps(props,state){
    
    if(state.events.length === 0 ){
      
      return{
        events:props.events,
      }
    }
      
    return state.events
  }
  
  handleSelectEvent(e) {
    const response = window.confirm('Do you want to delete this event?');
    if(response === true){
      
      var MyEvents = [...this.state.events];
      
      MyEvents.splice(MyEvents.indexOf(e),1);
      this.props.dropEvent(e.id);
            
      this.setState({
        events : MyEvents,
      });
       
    }
    
  }  
  
  handleSelectSlot({start,end}) {
      const title = window.prompt('New event!!')
      
      if(title){
        
        const newEvent = {
          id: this.state.events[this.state.events.length -1 ].id + 1,
          title : title,
          start : start,
          end : end,
          allDay:false
        }
        
        const AllEvents = [...this.state.events,newEvent]
        this.setState({
          events: AllEvents
        } );
        
        this.props.addEvent({
          title,
          start,
          end
        });
      }
    }
  
  render(){
    
    return (
      <div className='row min-vw-100 h-auto bg-white pb-5'>
        <Calendar 
          dayLayoutAlgorithm={'no-overlap'}
          onSelectSlot={this.handleSelectSlot}
          onSelectEvent={this.handleSelectEvent}
          events={this.state.events}
          selectable
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight:800,color:'black', fontSize:15  }}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  const FixedEvents = state.events?.map((item) =>{
    return{
      id:item.id,
      title:item.title,
      start: new Date(item.start),
      end: new Date(item.end),
      allDay:false    
    }
  })
  
  return{
    events : FixedEvents 
  }
} 

export default connect(mapStateToProps,{getEvents,addEvent,dropEvent})(MyCalendar);