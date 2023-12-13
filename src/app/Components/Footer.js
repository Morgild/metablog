import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-[#E8E8EA] pt-16">
      <div className="max-w-[1216px] m-auto flex flex-col gap-[25px]">
        <div className="flex flex-col md:flex-row justif-between ">
          <div className="w-[280px] hidden md:flex flex-col gap-3">
            <h3 className="text-lg text-[#181A2A] font-semibold">About</h3>
            <p className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="flex text-base font-normal text-[#3B3C4A]">
              <span className="font-extrabold">Email</span>{" "}
              <span className="">:info@jstemplate.net</span>
            </p>
            <p className="flex text-base font-normal text-[#3B3C4A]">
              <span className="font-extrabold">Phone</span>{" "}
              <span className="">:880123456789</span>
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-1/1 text-[#3B3C4A] flex flex-col justify-start">
              <ul className="flex flex-col gap-2">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/Blog'}>Blog</Link></li>
                <li><Link href={'/Contact'}>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3 m-auto h-4 md:gap-5 gap-[27px] flex mt-[30px] md:mt-0">
            <img className="w-4 h-4" src="/icon_fb.png" />
            <img className="w-4 h-4" src="/icon_tw.png" />
            <img className="w-4 h-4" src="/icon_in.png" />
            <img className="w-4 h-4" src="/icon_li.png" />
          </div>
        </div>
        <div className="border-t min-h-[95px] border-[#DCDDDF] flex py-8 flex h-9 items-center justify-between">
          <div className="flex w-full md:justify-start justify-center items-center gap-[10px]">
            <img className="h-9 pl-3" src="/Logo.png" />
            <div className="">
              <span className="text-xl font-normal text-[#141624]">Meta</span>
              <span className="text-xl font-extrabold text-[#141624]">
                Blog
              </span>
              <p className="text-base text-[#3B3C4A]">© All Rights Reserved.</p>
            </div>
          </div>
          <div className="hidden md:flex w-full gap-[21px] justify-end">
            <ul className="flex gap-[40px] font-normal text-base text-[#3B3C4A]  justify-center items-center">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
