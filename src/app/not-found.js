import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[208px] max-w-[1216px] w-1/2 flex flex-col md:flex-row items-center gap-[58.5px] justify-center min-w-[642px] mx-auto my-[100px]">
      <h2 className="text-7xl font-normal">404</h2>
      <div className="md:flex flex-col hidden gap-[58.5px] w-[1px] h-[156px] bg-[#E8E8EA]"></div>
      <div className="max-w-[392px] flex flex-col py-2 gap-5">
        <h3 className="text-2xl font-semibold text-black">Page Not Found</h3>
        <p className="text-[#696A75] text-lg ">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href={"/"}>
          <button className="w-fit text-white rounded-md py-[10px] px-[16px] bg-[#4B6BFB]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
