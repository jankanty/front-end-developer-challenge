import { useReducer } from 'react';



interface Store {
  branches: {
    active: boolean;
    id: string;
  }[][];
  counter: number;
}

interface StoreAction {
  active: boolean;
  id: string;
}



const initializer = (): Store => {
  return {
    branches: [
      [
        {
          active: false,
          id: 'stack',
        },
        {
          active: false,
          id: 'skull',
        },
        {
          active: false,
          id: 'lightning',
        },
        {
          active: false,
          id: 'scuba',
        },
      ],
      [
        {
          active: false,
          id: 'ship',
        },
        {
          active: false,
          id: 'crown',
        },
        {
          active: false,
          id: 'cake',
        },
        {
          active: false,
          id: 'cutlery',
        },
      ],
    ],
    counter: 0,
  };
};

const reducer = (state: Store, action: StoreAction): Store => {
  let counter = 0;

  const branches = state.branches.map((branch) => {
    return branch.map((talent, index) => {
      if (talent.id === action.id) {
        if (action.active === false && !branch.some((t, i) => t.active === true && i > index)) {
          return action;
        }

        if (action.active === true && !branch.some((t, i) => t.active === false && i < index) && state.counter < 6) {
          counter++;

          return action;
        }
      }

      if (talent.active) {
        counter++;
      }

      return talent;
    });
  });

  return {
    branches,
    counter,
  };
};

export const useStore = () => {
  return useReducer(reducer, null, initializer);
};
