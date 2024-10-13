const Header = () => {
  return (
    <div className="fixed text-neutral-900 z-10 h-[70px] w-full backdrop-blur-sm bg-white/20 items-center flex  justify-center">
      <div className="flex justify-between items-center w-[80%]">
        <p>NEXTGeN</p>
        <div className="flex items-center gap-5">
          <button className="bg-white text-neutral-900 px-12 font-semibold py-3 rounded-md border">
            Chart
          </button>
          <button className="border bg-white text-neutral-900 px-12 font-semibold py-3 rounded-md">
            Participate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
