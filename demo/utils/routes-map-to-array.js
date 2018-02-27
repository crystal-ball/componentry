export type Route = {
  id: string,
  pathname: string,
  state: {
    name: string,
  },
}

/**
 * Converts route maps into an array data structure for use inside render methods.
 */
export default routeMap => {
  const routesArray = []
  Object.keys(routeMap).forEach(route => {
    routesArray.push({ ...routeMap[route], id: route })
  })

  return routesArray
}
