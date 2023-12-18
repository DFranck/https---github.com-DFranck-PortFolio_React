export const imgFormater = (projectsData) => {
  const formatedData = projectsData?.map((project) => {
    return {
      ...project,
      imgURL: project.imgURL.split("/").pop(),
    };
  });
  return formatedData;
};
