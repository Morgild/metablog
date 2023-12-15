import Link from "next/link";
import { useSearch } from "../layout";
import { useRouter } from "next/navigation";
export function BurgerMenu() {
  const { hide, setHide } = useSearch();
  const router=useRouter();
  return (
    <header
      className={`bg-[#50505050] backdrop-blur-lg ${
        hide ? "hidden" : "flex"
      } flex-col p-10 w-full fixed h-screen left-0 top-0 z-[10]`}
    >
      <Link href={"/"}>
        <img className="h-9" src="/Logo1.png" />
      </Link>
      <div className="w-full flex mt-10 ml-5 justify-start">
        <div className="text-[#3B3C4A] flex flex-col justify-start">
          <ul className="flex flex-col gap-10 text-2xl cursor-pointer text-white">
            <li onClick={()=>{setHide(true),router.push('/')}}>Home</li>
            <li onClick={()=>{setHide(true),router.push('/Blog')}}>Blog</li>
            <li onClick={()=>{setHide(true),router.push('/Contact')}}>Contact</li>
          </ul>
        </div>
      </div>
      <div className="relative flex block relative h-9 mt-8 ">
        <input
          className="bg-[#f4f4f5] w-full p-2 pl-4 rounded-[5px] h-10"
          type="text"
          placeholder="search"
        />
        <img className="h-4 w-4 top-3 right-4 absolute" src="/magGlass.png" />
      </div>
      <div
        onClick={() => {
          setHide(true);
        }}
        className="flex justify-center items-center rounded-full absolute right-5 top-5 cursor-pointer  w-10 h-10"
      >
        <img className="w-8 h-8 pointer-cursor" src="/cross.png" />
      </div>
    </header>
  );
}
