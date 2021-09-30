import React from "react";
import PropTypes from "prop-types";

export const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="Avatar"
                className="round-img"
                style={{ width: "70px" }}
            />
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-primary btn-sm my-1">
                Profile
            </a>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};
