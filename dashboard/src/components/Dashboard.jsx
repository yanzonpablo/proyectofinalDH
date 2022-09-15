import LastProduct from "./LastProduct";
import CategoriesInDB from "./Categories/CategoriesInDB";

export default function Dashboard() {
    return (
        <>
            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <LastProduct />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <CategoriesInDB />
            </div>
        </>
    );
}
