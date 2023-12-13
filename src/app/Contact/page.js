"use client";

export default function Contact() {
  return (
    <div className="flex flex-col bg-white max-w-[769px] mx-auto mt-[100px] gap-5">
      <div className="flex flex-col px-[10px] max-w-[624px] m-auto text-justify pt-[14px] gap-5">
        <h2 className="text-4xl font-semibold text-black">Contact Us</h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="flex max-w-[624px] gap-[50px] py-[10px]">
        <div className="flex flex-col border border-[#E8E8EA] rounded-xl p-4 gap-[10px] text-[#696A75]">
          <h2 className="font-semibold text-2xl text-black ">Address</h2>
          <p className="text-lg font-normal">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="flex flex-col border border-[#E8E8EA] rounded-xl p-4 gap-[10px] text-[#696A75]">
          <h2 className="font-semibold text-2xl text-black ">Address</h2>
          <p className="text-lg font-normal">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
      </div>
      <div className="max-w-[643px] rounded-[10px] bg-[#F6F6F7] pt-[29px] pr-[130px] pb-[26px] pl-[35px] mb-[166px]">
        <form className="flex flex-col gap-6 ">
          <h3 className="text-black font-semibold text-lg ">Leave a Message</h3>
          <div className="flex gap-[28px]">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-[5px] border border-[#DCDDDF] py-[14px] pr-[14px] pl-[20px]"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-[5px] border border-[#DCDDDF] py-[14px] pr-[14px] pl-[20px]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-[5px]  border border-[#DCDDDF] py-[14px] pr-[14px] pl-[20px]"
          />
          <textarea
            type="text"
            placeholder="Write a message"
            className="w-full rounded-[5px] flex items-start justify-start border border-[#DCDDDF] py-[14px] pr-[14px] pl-[20px] min-h-[134px]"
          />
          <button className="bg-[#4B6BFB] font-medium w-fit rounded-md py-[10px] px-[16px] text-sm text-white">Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
