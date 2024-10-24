import "./ProductList.css";
import { data } from "../../result";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useState, useRef } from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 140,
    sortable: true,
    floatingFilter: true,
    filter: "agNumberColumnFilter",
  },
  {
    field: "_year",
    headerName: "Year",
    width: 200,
    sortable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "month",
    filter: "agTextColumnFilter",
    headerName: "Month",
    width: 150,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "product",
    filter: "agTextColumnFilter",
    headerName: "Product",
    width: 180,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "state",
    filter: "agTextColumnFilter",
    headerName: "State",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "requirement_in_mt_",
    filter: "agNumberColumnFilter",
    headerName: "Requirement (MT)",
    width: 250,
    sortable: true,
    floatingFilter: true,
  },
  {
    field: "availability_in_mt_",
    filter: "agNumberColumnFilter",
    headerName: "Availability (MT)",
    width: 190,
    sortable: true,
    floatingFilter: true,
  },
];

function ProductList() {
  const gridRef = useRef(); // Reference to grid instance
  const [rowData, setRowData] = useState(data); // Set initial row data
  const [paginationPageSize] = useState(100); // Default page size

  return (
    <div className="productList">
      <div>Product List</div>

      <div className="productListTable">
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "500px" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columns}
            defaultColDef={{
              resizable: true,
              sortable: true,
              filter: true,
              floatingFilter: true,
            }}
            pagination={true}
            paginationPageSize={paginationPageSize}
            animateRows={true}
            rowSelection="multiple"
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
