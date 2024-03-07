import "./styles.css";
import Arrow from "../../../../assets/components/svg/arrow";

type PaginationManagerProps = {
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
  itemsPerPage: string;
  setItemsPerPage: (newQuantity: string) => void;
};

const PaginationManager = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage,
}: PaginationManagerProps) => {
  const substract = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const add = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageInput: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    console.log(target.value);
    const isValidPage = !isNaN(Number(target.value));
    if (isValidPage) {
      setCurrentPage(Number(target.value));
    }
  };

  return (
    <div className="postsperpage">
      <div className="pagination">
        <div onClick={() => substract()}>
          <Arrow angle={180} size={25} color="#aaa" />
        </div>
        <input type="text" onChange={handlePageInput} value={currentPage} />
        <div onClick={() => add()}>
          <Arrow angle={0} size={25} color="#aaa" />
        </div>
      </div>
      <select
        onChange={({ target }) => setItemsPerPage(target.value)}
        value={itemsPerPage}
      >
        <option value="All">All</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PaginationManager;
