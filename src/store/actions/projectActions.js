export const createProject = (project) => {
  return(dispatch, getState,{getFirebase, getFirestore}) => {
    // async
    dispatch({type: 'CREATE_PROJECT', project})
  }
} 