import './index.css';



interface TreeCounterProps {
  children: React.ReactNode
}



export const TreeCounter = ({ children }: TreeCounterProps) => {
  return (
    <div className="tree__counter">
      <span>{ children }</span>
      <span>Points Spent</span>
    </div>
  );
};
