import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import AccountsList from "../../components/common/AccountsList";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  appendHead() {
    const { users = [] } = this.props;
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        {this.appendHead()}
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
