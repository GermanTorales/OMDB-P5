import React from "react";
import ButtonPagination from "./Inside/ButtonPagination";

export default ({ selected, page, onChangePage, pageLinks }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <nav aria-label="">
            <ul className="pagination justify-content-center">
              <li className={`page-item `}>
                <ButtonPagination
                  width="100px"
                  heigth="50px"
                  name={"Previous"}
                  number={page - 1}
                  onChangePage={onChangePage}
                />
              </li>
              {pageLinks.map((number, index) => (
                <li className="page-item px-1" key={index}>
                  <ButtonPagination
                    selected={selected}
                    width="50px"
                    heigth="50px"
                    name={number}
                    number={number}
                    onChangePage={onChangePage}
                  />
                </li>
              ))}
              <li className={`page-item`}>
                <ButtonPagination
                  width="100px"
                  heigth="50px"
                  name={"Next"}
                  number={page + 1}
                  onChangePage={onChangePage}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
