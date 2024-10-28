import Search from "./Search";
import SearchCol from "./SearchCol";
import SearchMobile from "./SearchMobile";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="hidden xl:block">
        <Search />
      </div>
      <div className="hidden lg:block xl:hidden mx-auto">
        <SearchCol />
      </div>
      <div className="flex lg:hidden justify-center">
        <SearchMobile />
      </div>
    </div>
  );
}

export default SearchBar;
