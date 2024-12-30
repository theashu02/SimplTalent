import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Job", url: "upload-jobs" },
    { name: "About Us", url: "about" },
  ];

  const location = useLocation();
  

  return (
    <div className="flex gap-5 items-center text-mine-shaft-300 h-full">
      {links.map((link, index) =><div className={`${location.pathname=="/" + link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}> 
        <Link key={index} to={link.url}>
          {link.name}
        </Link></div>
      )}
      {/* <a href="">Find Jobs</a>
      <a href="">Find Talent</a>
      <a href="">Upload Jobs</a>
      <a href="">About Us</a> */}
    </div>
  );
};

export default NavLinks;
