import React from 'react'
import AddBooking from './Appointment/AddBooking'
import ConfirmBook from './Appointment/ConfirmBook'
import MyAppointment from './Appointment/MyAppointment'

function Appointment() {
  return (
    <div>
        <AddBooking/>
        <ConfirmBook/>
        <MyAppointment/>
    </div>
  )
}

export default Appointment