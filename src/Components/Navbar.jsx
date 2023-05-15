import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Link to='/'>
                    <Typography variant="h4" className={classes.logo}>
                        Navbar
                    </Typography>
                </Link>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Task 1
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link to="/task2" className={classes.link}>
                        Task 2
                    </Link>
                    <Link to="/task3" className={classes.link}>
                        Task 3
                    </Link>

                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;