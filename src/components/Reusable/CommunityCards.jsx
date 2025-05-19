function CommunityCards({ img }) {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="w-[180px] h-[240px] bg-white flex justify-center items-center  overflow-hidden">
        <img src={img} alt="Team Member" className="w-full h-full object-fit" />
      </div>
    </div>
  );
}

export default CommunityCards;
