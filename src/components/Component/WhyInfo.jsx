function WhyInfo({ txt }) {
  return (
    <div className="flex flex-row justify-center items-center md:justify-start md:items-start gap-8">
      <div className="rounded-tr-[40px] rounded-bl-[40px] bg-[green]  w-10 h-10"></div>
      <h1 className="text-black text-[20px] w-[220px] md:whitespace-nowrap">
        {txt}
      </h1>
    </div>
  );
}

export default WhyInfo;
