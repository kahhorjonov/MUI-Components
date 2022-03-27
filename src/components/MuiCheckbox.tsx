import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { BookmarkBorder } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <FormControlLabel
        label="I accept terms and conditions"
        control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
      />

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="CSS"
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />

            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="JS"
                  checked={skills.includes("JS")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
