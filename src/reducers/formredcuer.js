// export function formreducer(state, action) {

//     switch (action.type) {
//       case "changetext":
//       return {...state,...action.payload}
//       case "changeselect":
//       return action.payload;
//       default : 
//       return {name: "nothing"}
//     }
//     }

export function formreducer(state, action) {
      return {...state,...action.payload}
    }