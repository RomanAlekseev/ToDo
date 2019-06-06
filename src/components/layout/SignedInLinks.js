import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const SignedInLinks = props => {
  const { mail } = props;
  console.log(mail);
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn pink lighten-1">
          {mail}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  return {
    mail: state.firebase.auth.email
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
