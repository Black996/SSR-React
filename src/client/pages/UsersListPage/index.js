import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import UserListItem from "./UsersListItem";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => {
      return <UserListItem key={id} name={name} />;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}
