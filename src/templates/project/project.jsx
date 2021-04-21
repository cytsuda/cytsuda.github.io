import React, { useRef, useEffect, useState } from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import { motion } from "framer-motion";

import Layout from "@layout/main";
import ProjectHeader from "@templates/project/header";
import NextProjectHeader from "@templates/project/next-header";
import ProjectContent from "@templates/project/content";

const TRANSITION_LENGTH = 1.5;

const FadingContent = ({ state, children }) => {
  const { transitionStatus } = state;
  return (
    <motion.div
      animate={transitionStatus}
      variants={{ exiting: { opacity: 0 } }}
    >
      {children}
    </motion.div>
  );
};

const SlidingHeaderTransition = {
  ease: [0.59, 0.01, 0.28, 1],
  delay: 0.25,
  duration: TRANSITION_LENGTH - 0.25,
};

const SlidingHeader = (props) => {
  const { state, children, headerRef } = props;
  const { transitionStatus } = state;
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const distanceToTop =
      headerRef.current.getBoundingClientRect().top -
      document.querySelector("header").getBoundingClientRect().height;
    setDistance(distanceToTop * -1);
  }, [headerRef, transitionStatus]);

  return (
    <motion.div
      animate={transitionStatus}
      variants={{ exiting: { y: distance } }}
      transition={SlidingHeaderTransition}
    >
      {children}
    </motion.div>
  );
};

const ProjectInner = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`;
  const headerRef = useRef(null);
  const shouldTruncate = ["entering", "entered"].includes(
    transitionStatus.transitionStatus
  );

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => {
      if (document && window) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "visible";
      }
    },
  };
  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => document && (document.body.style.overflow = "hidden"),
  };

  return (
    <Layout state={transitionStatus}>
      <FadingContent state={transitionStatus}>
        <ProjectHeader project={project} />
        <ProjectContent />
      </FadingContent>
      <TransitionLink
        to={nextProjectUrl}
        entry={entryTransition}
        exit={exitTransition}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FadingContent state={transitionStatus}>
          <NextProjectHeader />
        </FadingContent>
        <SlidingHeader headerRef={headerRef} state={transitionStatus}>
          <div ref={headerRef}>
            <ProjectHeader project={project.next} truncated={shouldTruncate} />
          </div>
        </SlidingHeader>
      </TransitionLink>
    </Layout>
  );
};

const Project = ({ pageContext: project }) => {
  return (
    <TransitionState>
      {(transitionStatus) => (
        <ProjectInner transitionStatus={transitionStatus} project={project} />
      )}
    </TransitionState>
  );
};

export default Project;
