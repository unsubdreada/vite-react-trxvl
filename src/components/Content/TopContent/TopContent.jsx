import Title from "../TopContent/Title";
import SearchBar from "./SearchBar/SearchBar";
import TopCategories from "../TopContent/TopCategories";
import TopVacation from "../TopContent/TopVacation";

function TopContent() {
  return (
    <div className="flex flex-col pt-14 md:pt-32 px-12 md:px-36 bg-[url(/src/assets/images/bg.png)] bg-cover bg-center">
      <Title />
      <SearchBar />
      <TopCategories />
      <TopVacation />
    </div>
  );
}

export default TopContent;
