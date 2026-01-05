import pmpmlLogo from "@/assets/pmpml-logo.png";

const PMPMLLogo = () => {
  return (
    <div className="animate-logo-pulse">
      <img 
        src={pmpmlLogo} 
        alt="PMPML Logo" 
        className="w-36 h-36 object-contain"
      />
    </div>
  );
};

export default PMPMLLogo;
