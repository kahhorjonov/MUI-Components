import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextFields = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
          variant="filled"
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          size="small"
          variant="outlined"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Don't share your password with anyone"
          }
        />

        <TextField
          label="Password"
          type="password"
          size="small"
          variant="outlined"
          helperText="Don't share your password with anyone"
        />

        <TextField
          label="Read Only"
          size="small"
          value={21656}
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
