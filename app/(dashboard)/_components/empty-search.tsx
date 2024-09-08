import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty-search.svg"
        alt="Empty search"
        width={200}
        height={200}
      />
      <h2 className="text-lg font-semibold text-gray-700">
        No results found
      </h2>
      <p className="text-sm text-gray-500">
        We couldn't find any results for your search
      </p>
    </div>
  );
}