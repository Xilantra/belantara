import * as React from "react";

function AccountList({ usrName, accountUrl, iconName }) {
    return (
        <li className="column is-12">
            <a title={usrName} href={accountUrl} target="_blank" rel="noopener noreferrer">
                <img
                    src={iconName}
                    alt={usrName}
                    style={{ width: "1em", height: "1em" }}
                />
            </a>
        </li>
    );
  }
export default AccountList;
