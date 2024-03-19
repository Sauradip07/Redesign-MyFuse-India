import JobCard from "../../components/ui/JobCard";

const JobList = ({ handleTagClick , filteredJobs }:{
        handleTagClick: any;
        filteredJobs: any;
}): JSX.Element => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col">
                {filteredJobs.map((job) => (
                    <JobCard job={job} handleTagClick={handleTagClick} />
                ))}
            </div>
        </div>
    );
};

export default JobList;