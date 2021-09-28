import React, { Component } from "react";

export class UserItem extends Component {
    render() {
        const { login, avatar_url, html_url } = this.props.user;

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
    }
}

export default UserItem;
