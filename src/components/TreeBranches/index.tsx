import './index.css';



interface TreeBranchesProps {
  children: React.ReactNode
}



export const TreeBranches = ({ children }: TreeBranchesProps) => {
  return (
    <div className="tree__branches">
      { children }
    </div>
  );
};
