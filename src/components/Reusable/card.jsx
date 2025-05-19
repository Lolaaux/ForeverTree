function Card({ image, title, text }) {
  return (
    <div className="flex md:flex-row flex-col gap-8 mt-5">
      <div className="flex flex-col gap-2">
        <div className="flex w-full h-[70px] justify-center items-center">
          <img src={image} className="w-[50px] h-[50px] object-contain" />
        </div>
        <div className="flex flex-col md:px-20 lg:px-5 gap-2 ">
          <h1 className="text-black font-[500] text-xl md:whitespace-nowrap text-center">
            {title}
          </h1>
          <p className="text-black w-fit text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
