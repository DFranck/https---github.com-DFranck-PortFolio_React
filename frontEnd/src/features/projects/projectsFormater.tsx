export const imgFormater = (projectsData) => {
  const formatedData = projectsData?.map((project) => {
    return {
      ...project,
      image: project.image.split("/").pop(),
    };
  });
  return formatedData;
};
