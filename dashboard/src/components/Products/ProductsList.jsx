import React from "react";
import { Component } from "react";
import { EXPRESS_HOST } from "../../host";
import Product from "./Product";

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/products/`);
        const productResult = await result.json();
        const newProducts = productResult.products;
        this.setState({
            products: newProducts,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    All the products in the Database
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
                                        <th>Categoria</th>
                                        <th>Precio</th>
                                        <th>Sección</th>
                                        <th>Descuento</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Categoria</th>
                                        <th>Precio</th>
                                        <th>Sección</th>
                                        <th>Descuento</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.products.map((product) => {
                                        return (
                                            <Product {...product} key={product.id} />
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
