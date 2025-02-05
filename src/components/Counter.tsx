import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const bgProps = useSpring({
    background: `rgba(0, 0, 255, ${count / 10})`,
  });

  return (
    <animated.div style={{ padding: 20, borderRadius: 10, textAlign: "center", ...bgProps }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>+</Button>
      <Button variant="contained" color="secondary" onClick={() => setCount(0)} sx={{ mx: 2 }}>Reset</Button>
      <Button variant="contained" color="error" onClick={() => setCount(count - 1)}>-</Button>
    </animated.div>
  );
};

export default Counter;
