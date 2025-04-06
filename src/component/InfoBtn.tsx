interface InfoBtnProps {
  onToogleShowTool: () => void; // Define the type of the onToogleShowTool prop as a function
}

const InfoBtn: React.FC<InfoBtnProps> = ({ onToogleShowTool }) => {
  const toggleTollpageState = () => {
    if (onToogleShowTool) {
      onToogleShowTool();
    }
  };

  return (
    <button className="info-btn" onClick={toggleTollpageState}>
      i
    </button>
  );
};

export default InfoBtn;
