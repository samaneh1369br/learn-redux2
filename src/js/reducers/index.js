import React from "react"
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [{ title: 'React Redux Tutorial for Beginners', id: 1 },{ title: 'React Redux Tutorial for Beginners**', id: 2 },{ title: 'React Redux Tutorial for Beginners***', id: 3 }]
  };
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
    return state;
  }
  export default rootReducer;