'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let currentState = { ...state };

  for (const action of actions) {
    let newState;

    if (action.type === 'clear') {
      newState = {};
    } else if (action.type === 'addProperties') {
      newState = { ...currentState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      newState = { ...currentState };

      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    } else {
      newState = { ...currentState };
    }

    states.push(newState);
    currentState = newState;
  }

  return states;
}
module.exports = transformStateWithClones;
