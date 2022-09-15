import React, { Component } from "react";
import BigCard from "../BigCard";
import Categorie from "./Categorie";

const EXPRESS_HOST = "http://localhost:3010";

export default class CategoriesInDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/categories/`);
        const categoriesResult = await result.json();
        const newCategories = categoriesResult.data;
        this.setState({
            categories: newCategories,
        });
    }

    render() {
        return (
            <BigCard title="Categories in Database">
                <div className="row">
                    {this.state.categories.map((categorie) => {
                        return <Categorie {...categorie} key={categorie.id} />;
                    })}
                </div>
            </BigCard>
        );
    }
}
