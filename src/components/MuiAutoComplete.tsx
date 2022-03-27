import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["html", "css", "javaScript", "typeScript", "reactJs"];

const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        // and we can add typeSolo prop to get values which typed
      />

      <Autocomplete
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
        // and we can add typeSolo prop to get values which typed
      />
    </Stack>
  );
};
