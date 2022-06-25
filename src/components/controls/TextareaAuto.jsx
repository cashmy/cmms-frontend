import React from 'react';
import { useTheme } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const TextareaAuto = (props) => {
  const { name, label, value, error = null, onChange, ...other } = props;
  const theme = useTheme();

  return (
    <TextareaAutosize
      label={label || "label"}
      placeholder={label || "label"}
      name={name || "name"}
      aria-label={name || "name"}
      value={value}
      onChange={onChange}
      fullWidth
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
};

export default TextareaAuto;
