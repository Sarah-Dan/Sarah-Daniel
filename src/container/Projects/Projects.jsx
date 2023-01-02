import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages] = useState(5);


  useEffect(() => {
    const query = `*[_type == "projects"]`;
    // display 3 projects per page
    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, [page]);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head__text">
        My creative <span>Projects</span>
      </h2>
      {/* filter projects by tags */}
      <div className="app__project--filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              className={`app__project--filter--item app__flex p__text ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={index}
              onClick={() => handleProjectFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project--portfolio"
      >
        {filterProjects.map((projects, index) => (
          <div className="app__project--item app__flex" key={index}>
            <div className="app__project--img app__flex">
              <img src={urlFor(projects.imgUrl).url()} alt={projects.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project--hover app__flex"
              >
                <a href={projects.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={projects.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__project--content app__flex">
              <h4 className="bold__text">{projects.title}</h4>
              <p className="p__text" style={{ marginTop: 10 }}>
                {projects.description}
              </p>
              <div className="app__project--tag app__flex">
                <p className="p__text">{projects.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* pagination */}
      <div className="pagination">
          {
            <button
              className="page__btn"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }
          {Array.from(Array(totalPages), (e, i) => {
            return (
              <button
                className="pages__btn"
                key={i}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            );
          })}
          {
            <button
              className="page__btn"
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
          <p className="paging">
            {" "}
            Page {page} of {totalPages}
          </p>
        </div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__works"),
  "projects",
  "app__primarybg"
);
