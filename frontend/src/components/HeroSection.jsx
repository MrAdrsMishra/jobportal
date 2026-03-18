import { useState } from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold">
        Find Your <span className="text-blue-600">Dream Job</span>
      </h1>

      <p className="text-gray-500 mt-4">
        Discover thousands of job opportunities from top companies.
      </p>

      <form
        onSubmit={handleSearch}
        className="mt-8 flex justify-center gap-2"
      >
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18}/>
          <input
            type="text"
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Search
        </button>
      </form>
    </section>
  );
};

export default HeroSection;