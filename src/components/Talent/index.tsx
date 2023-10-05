import './index.css';



interface TalentProps {
  onChange: (talent: { active: boolean; id: string; }) => void;
  talent: {
    active: boolean;
    id: string;
  };
}



export const Talent = ({ onChange, talent }: TalentProps) => {
  return (
    <button
      className={'talent' + ' ' + (talent.active ? 'talent--active' : '') + ' ' + ('talent__' + talent.id)}
      onClick={() => {
        onChange({
          ...talent,
          active: true,
        });
      }}
      onContextMenu={(event) => {
        event.preventDefault();

        onChange({
          ...talent,
          active: false,
        });
      }}
    />
  );
};
