import './index.css';

import { Talent, TreeBranch, TreeBranches, TreeCounter } from '@/components';

import { useStore } from './utils';



export const Tree = () => {
  const [store, onChange] = useStore();

  return (
    <div className="tree">
      <TreeBranches>
        {
          store.branches.map((branch, index) => (
            <TreeBranch key={index}>
              <span>Talent path {index + 1}</span>
              <div>
                {
                  branch.map((talent) => (
                    <Talent
                      key={talent.id}
                      onChange={onChange}
                      talent={talent}
                    />
                  ))
                }
              </div>
            </TreeBranch>
          ))
        }
      </TreeBranches>
      <TreeCounter>{store.counter} / 6</TreeCounter>
    </div>
  );
};
