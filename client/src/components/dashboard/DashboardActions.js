import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: 'none'
  }
}));

const DashboardActions = () => {
  const classes = useStyles();
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      {/* <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary" /> Add Experience
      </Link> */}
      <Button
        component={Link}
        variant="contained"
        color="primary"
        to="/add-game"
        className={classes.linkStyle}
        startIcon={<SportsEsportsIcon />}
      >
        Add Game
      </Button>
    </div>
  );
};

export default DashboardActions;
