import pmpmlLogo from "@/assets/pmpml-logo.png";

const PMPMLLogo = () => {
  return (
    <div className="animate-logo-pulse">
      <img 
        src={pmpmlLogo} 
        alt="PMPML Logo" 
        className="w-52 h-52 object-contain"
      />
    </div>
  );
};

export default PMPMLLogo;
