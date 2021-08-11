import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, handlePageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="pagination">
      {pagesCount === 1
        ? null
        : pages.map((page) => (
            <button
              onClick={() => handlePageChange(page)}
              key={page}
              className={
                page === currentPage
                  ? "btn_pagination active"
                  : "btn_pagination"
              }
            >
              {page}
            </button>
          ))}
    </div>
  );
};

export default Pagination;
