import React from "react";
import ButtonPagination from "../Commons/ButtonPagination";

export default ({ page, onChangePage, pageLinks }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <nav aria-label="">
            <ul className="pagination justify-content-center">
              <li className={`page-item `}>
                <ButtonPagination
                  name={"Previous"}
                  number={page - 1}
                  onChangePage={onChangePage}
                />
              </li>
              {pageLinks.map((number, index) => (
                <li className="page-item px-1" key={index}>
                  <ButtonPagination
                    name={number}
                    number={number}
                    onChangePage={onChangePage}
                  />
                </li>
              ))}
              <li className={`page-item`}>
                <ButtonPagination
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
