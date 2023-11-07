const Appbar = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-medium text-white">Dashboards</h1>
      <div>
        <select
          id="magicHouses"
          className="outline-none border-none py-3 px-2 rounded"
        >
          <option value="Gryfindor">a</option>
          <option value="Hufflepuff">b</option>
          <option value="Slytherin">c</option>
          <option value="Ravenclaw">d</option>
          <option value="Horned Serpent">e</option>
          <option value="Thunderbird">f</option>
          <option value="Pukwudgie">g</option>
          <option value="Wampus">h</option>
        </select>
      </div>
    </div>
  );
};

export default Appbar;
