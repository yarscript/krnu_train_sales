// const basePaths = {
//   heroes: 'heroes'
// };

const apiRoutesNames = {
  organisation: {
    path: 'organisation',
    all: 'organisation',
    create: 'organisation/create',
  },
  // heroes: {
  //   basePath: basePaths.heroes
  // }
};

export const ApiRoutesConfig: any = {
  apiRoutesNames,
  apiRoutes: {
    organisation: {
      all: `/${ apiRoutesNames.organisation.all }`,
      create: `/${ apiRoutesNames.organisation.create }`,
    }
  }
};

// export function getHeroDetail(id) {
//   return `/${basePaths.heroes}/${id}`;
// }
