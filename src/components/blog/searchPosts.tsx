import { FormEvent } from 'react';

type SearchPostsProps = Function;

const SearchPosts = ({ searchItem }: { searchItem: SearchPostsProps }) => (
  <div className="mt-10 h-24 lg:w-1/4">
    <div className="lg:fixed">
      <form>
        <label
          className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          htmlFor="search"
        >
          Szukaj Postów
        </label>
        <input
          type="search"
          className="mb-3 block appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          placeholder="Szukaj"
          name="search"
          onChange={(e: FormEvent<HTMLInputElement>) => searchItem(e.currentTarget.value)
          }
        />
      </form>
    </div>
  </div>
);
export default SearchPosts;
