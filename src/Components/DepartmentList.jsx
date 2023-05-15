import * as React from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { List, ListItem, ListItemText, Collapse, Checkbox, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const data = [
  {
    "department": "customer_service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "department": "design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Department({ department, subDepartments, handleSelect }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSubDepartmentSelect = (event) => {
    const checked = event.target.checked;
    setChecked(checked);
    handleSelect(department, checked);
  }

  const handleAllSubDepartmentsSelect = (event) => {
    const checked = event.target.checked;
    setChecked(checked);
    subDepartments.forEach(subDepartment => handleSelect(subDepartment, checked));
    handleSelect(department, checked);
  }

  return (
    <React.Fragment>
      <ListItem button onClick={handleToggle}>
        <Checkbox checked={checked} onChange={handleAllSubDepartmentsSelect} />
        <ListItemText primary={department} />
        {open ? <Typography>-</Typography> : <Typography>+</Typography>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subDepartments.map(subDepartment => (
            <ListItem key={subDepartment} button className={classes.nested}>
              <Checkbox onChange={handleSubDepartmentSelect} />
              <ListItemText primary={subDepartment} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

export default function DepartmentList() {
  const [selectedDepartments, setSelectedDepartments] = React.useState({});

  const handleSelect = (name, checked) => {
    setSelectedDepartments(prevSelectedDepartments => ({ ...prevSelectedDepartments, [name]: checked }));
  };

  return (
    <ThemeProvider theme={theme}>
      <List>
        {data.map(({ department, sub_departments }) => (
          <Department
            key={department}
            department={department}
            subDepartments={sub_departments}
            handleSelect={handleSelect}
          />
        ))}
      </List>
    </ThemeProvider>
  );
}
