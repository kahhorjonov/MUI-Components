import React, { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="450px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="UZ">Uzbekistan</MenuItem>
        <MenuItem value="RU">Russia</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="KZ">Kazakhstan</MenuItem>
        <MenuItem value="KG">Kyrgzstan</MenuItem>
      </TextField>
    </Box>
  );
};
