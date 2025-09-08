import React from "react";
import PropTypes from "prop-types";

export default function AccountList(props) {
  const {
    userName,
    accountUrl,
    iconName
  } = props;

  return (
    <li className="list-none">
      <a className="hover:opacity-80" title={userName} href={accountUrl} target="_blank" rel="noopener noreferrer">
        <img src={iconName} alt={userName} style={{ width: "1.25rem", height: "1.25rem" }} />
      </a>
    </li>
  );
}

AccountList.propTypes = {
    iconName: PropTypes.string,
    userName: PropTypes.string,
    accountUrl: PropTypes.string,
};
