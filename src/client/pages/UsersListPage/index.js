import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import AccountsList from "../../components/common/AccountsList";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <AccountsList accounts={users} />
      </div>
    );
  }
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
};

function mapStateToProps({ users }) {
  return { users };
}
