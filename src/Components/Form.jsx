import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Form() {
  const classes = useStyles();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    setFormErrors({
      ...formErrors,
      [event.target.id]: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = false;
    const newErrors = { ...formErrors };
    if (!formData.name) {
      newErrors.name = true;
      errors = true;
    }
    if (!formData.phone) {
      newErrors.phone = true;
      errors = true;
    }
    if (!formData.email) {
      newErrors.email = true;
      errors = true;
    }
    if (errors) {
      setFormErrors(newErrors);
    } else {
      localStorage.setItem('formData', JSON.stringify(formData));
      history('/about');
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className='container'>
        <TextField
          required
          id="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={formErrors.name}
          helperText={formErrors.name && 'Please enter your name'}
        /><br/>
        <TextField
          required
          id="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          error={formErrors.phone}
          helperText={formErrors.phone && 'Please enter your phone number'}
        />
        <br/>
        <TextField
          required
          id="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          helperText={formErrors.email && 'Please enter your email'}
        />
      </div>
      <Button variant="contained" color="primary" className={classes.button} type="submit">
        Submit
      </Button>
    </form>
  );
}
