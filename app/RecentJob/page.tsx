import JobCard from "../../components/ui/JobCard";
import { SiAdobe } from "react-icons/si";
const JobList = ({
   handleTagClick,
   filteredJobs,
}: {
   handleTagClick: any;
   filteredJobs: any;
}): JSX.Element => {
   return (
      <div className="max-w-7xl mx-auto">
         <div className="flex flex-col">
            {filteredJobs.map((job) => (
               <JobCard job={job} icons={<SiAdobe />} handleTagClick={handleTagClick} key={"1"}/>
            ))}
         </div>
      </div>
   );
};

export default JobList;
