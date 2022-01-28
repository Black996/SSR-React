import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../../actions";
import AccountsList from "../../components/common/AccountsList";

class AdminsList extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    const { admins } = this.props;

    return (
      <div>
        <h1>The Admins List</h1>
        <AccountsList accounts={admins} />
      </div>
    );
  }
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};

function mapStateToProps({ admins }) {
  return { admins };
}
