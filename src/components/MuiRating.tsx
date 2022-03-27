import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        color="danger"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
        // we can also change icons into emojis and we should set highlightSelectedOnly prop
      />
    </Stack>
  );
};
