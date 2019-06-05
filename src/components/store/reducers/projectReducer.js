const initaialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect me find peach", content: "blah blah blah" },
    { id: "3", title: "eqq me find peach", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
