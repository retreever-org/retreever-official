const RuntimeCard = ({ runtime }) => {
  const Icon = runtime.icon;

  return (
    <div className="w-full max-w-55 h-40 sm:h-42.5 md:h-45 rounded-xl border border-gray-800 bg-[#0b0b0b] hover:border-gray-600 transition-all duration-300 flex flex-col items-center justify-center mx-auto">
      <Icon className={`text-3xl sm:text-4xl ${runtime.color}`} />

      <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium text-center">
        {runtime.name}
      </h3>

      <div
        className={`mt-3 sm:mt-4 px-4 sm:px-5 py-1.5 rounded-md border text-[10px] sm:text-xs tracking-wider ${
          runtime.active
            ? "border-[#00D8C3] text-[#00D8C3]"
            : "border-gray-700 text-gray-500"
        }`}
      >
        • {runtime.status}
      </div>
    </div>
  );
};

export default RuntimeCard;