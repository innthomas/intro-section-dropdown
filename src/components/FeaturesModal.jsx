import React from 'react';
import todolistIcon from '../images/icon-todo.svg';
import calendarIcon from '../images/icon-calendar.svg';
import remindersIcon from '../images/icon-reminders.svg';
import planningIcon from '../images/icon-planning.svg';
import './FeaturesModal.css';

const FeaturesModal = () => {
  return (
    <div className='modal'>
        <div> <img src={todolistIcon} alt="" /> Todo List </div>
        <div> <img src={calendarIcon} alt="" /> Calendar</div>
        <div> <img src={remindersIcon} alt="" /> Reminders </div>
        <div> <img src={planningIcon } alt="" /> Planning </div>
       
        </div>
  )
}

export default FeaturesModal