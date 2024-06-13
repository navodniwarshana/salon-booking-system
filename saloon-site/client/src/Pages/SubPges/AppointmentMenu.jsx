import React from 'react'
import Navigation from '../Navigation'
import AddBooking from './Appointment/AddBooking'
import ConfirmBook from './Appointment/ConfirmBook'
import MyAppointments from './Appointment/MyAppointments'

function AppointmentMenu() {
  return (
    <div>
       
        <AddBooking/>
        <ConfirmBook/>
        <MyAppointments/>
    </div>
  )
}

export default AppointmentMenu