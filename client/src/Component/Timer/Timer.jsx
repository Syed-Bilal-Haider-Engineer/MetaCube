import React, { useEffect } from "react";
import { Box } from "@mui/material";
function Timer({ checkMint }) {
  const [ceilTimer, setCeilTimer] = React.useState({
    mint: 0,
    second: 0,
    hours: 0,
  });
  const timerMethod = () => {
    var now = new Date().getTime();
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((now % (1000 * 60)) / 1000);
    setCeilTimer({
      ...ceilTimer,
      mint: minutes,
      second: seconds,
      hours: hours,
    });
  };
  const timerHandlewithInterval = () => {
    setInterval(timerMethod, 1000);
  };
  function clearIntervalHandle() {
    window.location.reload();
  }
  useEffect(() => {
    timerHandlewithInterval();
  }, []);

  console.log("ceilTimer:", ceilTimer, "checkMint:", checkMint);
  return (
    <Box>
      {ceilTimer?.mint >= checkMint
        ? clearIntervalHandle()
        : `${ceilTimer?.hours}:${ceilTimer?.mint}:${ceilTimer?.second}`}
    </Box>
  );
}

export default Timer;
