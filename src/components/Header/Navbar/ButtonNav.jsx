function ButtonNav({ text }) {
  return (
    <div className="ButtonNav flex align-middle text-white ">
      <button className="text-lg p-2 hover:ring-1 hover:ring-white">
        {text}
      </button>
    </div>
  );
}

export default ButtonNav;
