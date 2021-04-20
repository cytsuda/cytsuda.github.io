import React from "react";

import Layout from "@layout/main";
import ProjectHeader from "./header";
import ProjectContent from "@templates/project/content";

const Project = ({ pageContext: project }) => (
  <Layout>
    <ProjectHeader project={project} />
    <ProjectContent />
    <ProjectHeader project={project.next} truncated />
  </Layout>
);

export default Project;
