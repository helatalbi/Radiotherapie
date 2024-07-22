import "../../style/calendrier.css";
import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

const localizer = momentLocalizer(moment);

function CalendrierNote({}) {
  useState("");
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [validSlots, setValidSlots] = useState([]);

  const handleSelectSlot = async (slotInfo) => {};

  const getDayStyle = (date) => {
    const isSelected = validSlots.some((slot) =>
      moment(date).isSame(slot.start, "day")
    );

    return isSelected
      ? {
          backgroundColor: "orange",
          color: "white",
          cursor: "pointer",
        }
      : {};
  };

  return (
    <div className="cal">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: 800, marginTop: -10, marginLeft: 40 }}
        onSelectSlot={handleSelectSlot}
        selectable={true}
      />
    </div>
  );
}

export default CalendrierNote;
