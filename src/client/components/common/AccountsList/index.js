import React from "react";
import AccountListItem from "./AccountsListItem";

const AccountsList = ({ accounts }) => {
  function renderAccounts() {
    return (
      accounts &&
      accounts.map(({ id, name }) => <AccountListItem key={id} name={name} />)
    );
  }

  return (
    <div>
      <ul>{renderAccounts()}</ul>
    </div>
  );
};

export default AccountsList;
