import React from "react";

function Categorie({ nombre , products }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    {nombre} - {products.length}
                </div>
            </div>
        </div>
    );
}
export default Categorie;
