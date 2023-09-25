import React, { useState } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import Image1 from "../Asset/Nutrition.jpg";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const EVENTS = [
  // ... (your event data here)
];

export default function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slotCount, setSlotCount] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [totalAmount, setTotalAmount] = useState(slotCount * 499);

  const addSlot = () => {
    if (date && time) {
      const newSlot = {
        date: date,
        time: time,
      };
      setSlots([...slots, newSlot]);
      setDate("");
      setTime("");
      setSlotCount(slotCount + 1);
      setTotalAmount((slotCount + 1) * 499); // Update the total amount
    } else {
      alert("Please choose both date and time.");
    }
  };

  const handleBookSlot = () => {
    if (!date || !time) {
      alert("Please fill in both date and time fields.");
    } else {
      alert("Booked successfully!");
    }
  };

  const handleCouponCodeChange = (event) => {
    const code = event.target.value;
    setCouponCode(code);

    if (code === "NUTRITION") {
      setTotalAmount(totalAmount - 100);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "100%", marginBottom: "20px" }}>
          <CardContent>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={Image1} alt="Add Slot" style={{ width: "300px", marginBottom: "20px" }} />
              <h3>Add Slot</h3>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                  <TextField
                    variant="outlined"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ marginRight: "10px" }}
                  />
                  <TextField
                    variant="outlined"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <Button
                  variant="contained"
                  onClick={addSlot}
                  sx={{
                    background: "linear-gradient(to right, #4CAF50, #8BC34A)",
                    color: "white",
                    padding: "8px",
                    fontSize: "12px",
                    marginTop: "10px",
                    "&:hover": {
                      background: "linear-gradient(to right, #8BC34A, #4CAF50)",
                      color: "black",
                    },
                  }}
                >
                  <AddIcon />
                  Add Slot
                </Button>
              </div>
            </div>
            {slots.map((slot, index) => (
              <div key={index}>
                <p style={{ textAlign: "center" }}>
                  Slot {index + 1}: {slot.date} - {slot.time}
                </p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ marginTop: "20px" }}>
                <TextField
                  label="Total Amount"
                  variant="outlined"
                  value={`$${totalAmount}`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <FormControl variant="outlined" style={{ width: "50%", marginTop: "20px" }}>
                <Select
                  label="Apply Coupon code"
                  value={couponCode}
                  onChange={handleCouponCodeChange}
                  placeholder="Apply"
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="NUTRITION">NUTRITION FREE</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                onClick={handleBookSlot}
                sx={{
                  background: "linear-gradient(to right, #4CAF50, #8BC34A)",
                  color: "white",
                  padding: "8px",
                  fontSize: "12px",
                  "&:hover": {
                    background: "linear-gradient(to right, #8BC34A, #4CAF50)",
                    color: "black",
                  },
                }}
              >
                Book Slot
              </Button>
            </div>
          </CardContent>
        </Card>
        <div style={{ width: "100%" }}>
          <Scheduler
            view="day"
            events={EVENTS}
            selectedDate={new Date(2021, 4, 5)}
            style={{
              height: "50%",
            }}
            onSlotClick={(slot) => setSelectedSlot(slot)}
          />
        </div>
      </div>
    </div>
  );
}
