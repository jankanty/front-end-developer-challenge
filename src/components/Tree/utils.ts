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
  let xxx: Record<string, boolean> = {};

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);

    xxx = (params.get('talents') ?? '').split('--').reduce<Record<string, boolean>>((acc, id) => {
      if (id) {
        acc[id] = true;
      }

      return acc;
    }, {});
  }

  return {
    branches: [
      [
        {
          active: xxx.stack,
          id: 'stack',
        },
        {
          active: xxx.skull,
          id: 'skull',
        },
        {
          active: xxx.lightning,
          id: 'lightning',
        },
        {
          active: xxx.scuba,
          id: 'scuba',
        },
      ],
      [
        {
          active: xxx.ship,
          id: 'ship',
        },
        {
          active: xxx.crown,
          id: 'crown',
        },
        {
          active: xxx.cake,
          id: 'cake',
        },
        {
          active: xxx.cutlery,
          id: 'cutlery',
        },
      ],
    ],
    counter: Object.keys(xxx).length,
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

  const params = new URLSearchParams(window.location.search);

  params.set('talents', branches.reduce((acc, branch) => acc + branch.reduce((acc, talent) => talent.active ? acc + talent.id + '--' : acc, ''), ''));

  window.history.pushState(null, '', '?' + params.toString());

  return {
    branches,
    counter,
  };
};

export const useStore = () => {
  return useReducer(reducer, null, initializer);
};
