import * as React from "react";

function AccountList({ userName, accountUrl, iconName }) {
    return (
        <li className="column is-12">
            <a title={userName} href={accountUrl} target="_blank" rel="noopener noreferrer">
                <img
                    src={iconName}
                    alt={userName}
                    style={{ width: "1em", height: "1em" }}
                />
            </a>
        </li>
    );
  }
export default AccountList;
