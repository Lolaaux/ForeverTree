function WorkInfoTxt({ title, place, info }) {
  return (
    <div className="flex flex-col text-black whitespace-pre-line p-4 gap-2">
      <h1 className="font-[500] text-[25px] text-black">{title} </h1>
      <p className="text-black">{place}</p>
      <p className="text-black"> {info}</p>
    </div>
  );
}

export default WorkInfoTxt;
