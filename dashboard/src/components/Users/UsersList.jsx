import React from "react";
import { Component } from "react";
import { EXPRESS_HOST } from "../../host";
import User from "./User";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/user/`);
        const userResult = await result.json();
        const newUsers = userResult.users;
        this.setState({
            users: newUsers,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- USERS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    All the users in the Database
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Detalle</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.users.map((user) => {
                                        return (
                                            <User {...user} key={user.id} />
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
