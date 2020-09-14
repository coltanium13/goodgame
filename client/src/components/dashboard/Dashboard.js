import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Game from './Game';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [getCurrentProfile]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard!!</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          {/* <Experience experience={profile.experience} /> */}
          <Game games={profile.games} />

          <Grid container>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(deleteAccount())}
              >
                Delete My Account
              </Button>
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
