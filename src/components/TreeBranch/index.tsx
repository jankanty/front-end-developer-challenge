import './index.css';



interface TreeBranchProps {
  children: React.ReactNode
}



export const TreeBranch = ({ children }: TreeBranchProps) => {
  return (
    <div className="tree__branch">
      { children }
    </div>
  );
};
