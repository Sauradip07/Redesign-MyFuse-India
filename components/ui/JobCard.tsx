const JobCard = ({
   job,
   handleTagClick,
   icons,
}: {
   job: any;
   handleTagClick: any;
   icons: any;
}): JSX.Element => {
   const {
      company,
      logo,
      isNew,
      isFeatured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
   } = job;

   //const {icon} = icons;

   const tags = [role, level];

   if (tools) {
      tags.push(...tools);
   }

   if (languages) {
      tags.push(...languages);
   }

   return (
      <div className="flex flex-col justify-between bg-black shadow-md my-5 mx-10 p-6 rounded-md border border-gray-800 border-solid sm:flex-row hover:scale-105 transition duration-250 ease-out hover:ease-in">
         {/* company logo */}
         <img
            src={logo}
            alt="logo"
            className="-mt-11mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:my-0"
         />

         <div className="flex-flex-col-justify-between ml-4">
            {/* company name */}
            <h1 className="py-2 text-white font-bold text-lg flex items-center gap-2">
               {company}
               {isNew && (
                  <span className="bg-gray-500 rounded-full px-3 text-base text-white">
                     New
                  </span>
               )}
               {isFeatured && (
                  <span className="bg-gray-700 rounded-xl px-3 text-base text-white">
                     Featured
                  </span>
               )}
            </h1>

            {/* job position */}
            <h1 className="text-xl font-bold cursor-pointer">{position}</h1>

            {/* job info */}
            <p className="flex items-center gap-2 text-dark_gray_cyan text-base font-semibold">
               {postedAt} • {contract} • {location}• Remote
            </p>
         </div>
         {/* Job tags */}
         <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0">
            {tags.map((tag) => (
               <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 m-2 bg-transparent border border-black dark:border-gray-800 dark:text-gray-400 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  {tag}
               </button>
            ))}
         </div>
      </div>
   );
};
export default JobCard;
