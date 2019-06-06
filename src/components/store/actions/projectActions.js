export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async
    const firestore = getFirestore();
    const mail = getState().firebase.auth.email;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: mail,
        authorLastName: "Ninja",
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
