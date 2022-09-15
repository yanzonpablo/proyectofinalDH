import React from "react";
import { Component } from "react";
import { EXPRESS_HOST } from "../../host";
import DetailsCategorie from "./DetailsCategorie";

export default class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/categories/`);
        const categorieResult = await result.json();
        const newCategories = categorieResult.data;
        this.setState({
            categories: newCategories,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    All the categories in the Database
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
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.categories.map((categorie) => {
                                        return (
                                            <DetailsCategorie {...categorie} key={categorie.id} />
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
