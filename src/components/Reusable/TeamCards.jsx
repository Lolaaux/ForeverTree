function TeamCards({ img, txt }) {
  return (
    <div className="flex flex-col items-center w-[200px] rounded-[8px] ">
      <div className="w-full h-[200px] bg-white flex justify-center items-center  overflow-hidden">
        <img
          src={img}
          alt="Team Member"
          className="object-contain object-top pt-10"
        />
      </div>
      <p className="text-black text-center mt-2 text-sm">{txt}</p>
    </div>
  );
}

export default TeamCards;
