import Image from "next/image";

export const EmptyFav =() =>{
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty-favourites.svg"
        alt="Empty favourites"
        width={200}
        height={200}
      />
      <h2 className="text-lg font-semibold text-gray-700">
        No favorites found
      </h2>
      <p className="text-sm text-gray-500">
        You haven't added any favorites yet
      </p>
    </div>
  );
}