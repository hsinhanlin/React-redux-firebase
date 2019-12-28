import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {

  return (
    <ul className="ml-auto">
      <li><NavLink to="/create">New project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapsDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapsDispatchToProps)(SignInLinks);