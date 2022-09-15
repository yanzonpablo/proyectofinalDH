import "./App.css";

import CategoriesInDB from "./components/Categories/CategoriesInDB";
import ProductsList from "./components/Products/ProductsList";
import LastProduct from "./components/LastProduct";
import MiniCard from "./components/MiniCard";
import Sidebar from "./components/Sidebar";

const miniCards = [
  {
    id: "5",
    title: "Products in Database",
    value: "35",
    icon: "fa-film",
  },
  {
    id: "24",
    title: "Users in Database",
    color: "success",
    value: "10",
    icon: "fa-award",
  },
  {
    id: "32",
    title: "Categories in Database",
    color: "warning",
    value: "6",
    icon: "fa-user",
  },
];

function App() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Content Row Top --> */}
          <div className="container-fluid pt-5">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">
              {/* <!-- Movies in Data Base --> */}
              {miniCards.map((data) => {
                return <MiniCard {...data} key={data.id} />;
              })}
            </div>
            {/* <!-- End movies in Data Base --> */}

            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
              {/* <!-- Last Movie in DB --> */}
              <LastProduct />
              {/* <!-- End content row last movie in Data Base --> */}

              {/* <!-- Genres in DB --> */}
              <CategoriesInDB />
            </div>
            <ProductsList />
          </div>
          {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2021</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
}

export default App;
