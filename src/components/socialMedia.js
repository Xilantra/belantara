import React from "react";
import PropTypes from "prop-types";

export default function AccountList(props) {
  const {
    userName,
    accountUrl,
    iconName
  } = props;

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

AccountList.propTypes = {
    iconName: PropTypes.string,
    userName: PropTypes.string,
    accountUrl: PropTypes.string,
};
