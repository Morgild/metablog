import Link from "next/link";
import { useSearch } from "../layout";
import { BurgerMenu } from "./BurgerMenu";

export function Header() {
  const { search, setSearch, hide, setHide } = useSearch();
  const getSearchText = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <header className="md:py-8 p-[20px] flex w-full m-auto max-w-[1216px] gap-[118px] h-9 items-center justify-between">
      <Link href={"/"}>
        <img className="h-9 pl-3" src="/Logo1.png" />
      </Link>
      <div className="flex md:w-1/2 w-fit gap-[21px] justify-between items-center">
        <ul className="md:flex hidden  gap-[40px] justify-center items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/Blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex block relative h-9 ">
          <input
            onChange={getSearchText}
            className="bg-[#f4f4f5] p-2 pl-4 rounded-[5px]"
            type="text"
            placeholder="search"
            value={search}
          />
          <img className="h-4 w-4 top-3 right-4 absolute" src="/magGlass.png" />
        </div>
        <img
          onClick={() => {
            setHide(false)
          }}
          className="w-8 h-8 md:hidden cursor-pointer"
          src="/icon_burger.png"
        />
        <BurgerMenu />
      </div>
    </header>
  );
}
