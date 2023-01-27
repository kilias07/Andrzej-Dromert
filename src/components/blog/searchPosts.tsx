const SearchPosts = () => {
  return (
    <div className="lg:w-1/4 h-24 mt-10 lg:32">
      <div className="lg:fixed">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="search"
        >
          Szukaj
        </label>
        <input
          className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="search"
        />
      </div>
    </div>
  );
};

export default SearchPosts;
