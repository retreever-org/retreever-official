import RuntimeCard from "./RuntimeCard";
import { runtimes } from "../../data/runtimes";

const RuntimeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold lg:mt-20 mt-10">
          Runtimes
        </h2>

        <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
          Retreever starts with Spring Boot 3.x because that's where the
          deepest runtime introspection is possible.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {runtimes.map((runtime) => (
          <RuntimeCard
            key={runtime.name}
            runtime={runtime}
          />
        ))}
      </div>
    </div>
  );
};

export default RuntimeSection;