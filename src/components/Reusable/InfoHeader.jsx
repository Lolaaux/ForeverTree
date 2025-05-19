function InfoHeader({ info }) {
  return (
    <div className="flex justify-center items-center md:px-10 lg:px-20 xl:px-30 px-5 pt-10 pb-5 flex-col gap-4 w-[100vw]">
      <p className="text-[#33A900] text-[20px] self-start font-[400] md:text-[40px] ">
        {info}
      </p>
      <hr className="border-1 border-[#A4A2A2] w-[90vw]"></hr>
    </div>
  );
}

export default InfoHeader;
