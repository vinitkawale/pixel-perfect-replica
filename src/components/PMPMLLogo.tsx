const PMPMLLogo = () => {
  return (
    <div className="animate-logo-pulse">
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dashed circle */}
        <circle
          cx="70"
          cy="70"
          r="65"
          stroke="#333"
          strokeWidth="2"
          strokeDasharray="8 4"
          fill="none"
        />
        
        {/* Inner circle */}
        <circle
          cx="70"
          cy="70"
          r="55"
          stroke="#333"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Top curved text - पुणे महानगर परिवहन महामंडळ लि. */}
        <path
          id="topArc"
          d="M 20 70 A 50 50 0 0 1 120 70"
          fill="none"
        />
        <text fontSize="7" fill="#333" fontWeight="500">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            पुणे महानगर परिवहन महामंडळ लि.
          </textPath>
        </text>

        {/* परिवहन text above PMPML */}
        <text
          x="70"
          y="52"
          textAnchor="middle"
          fontSize="10"
          fill="#333"
          fontWeight="500"
        >
          परिवहन
        </text>

        {/* PMPML main text */}
        <text
          x="70"
          y="72"
          textAnchor="middle"
          fontSize="20"
          fill="#1a5fb4"
          fontWeight="900"
          letterSpacing="1"
        >
          PMPML
        </text>

        {/* Triangle/arrow pointing right */}
        <polygon
          points="32,62 32,78 45,70"
          fill="#1a1a1a"
        />

        {/* सेवा text below PMPML */}
        <text
          x="70"
          y="88"
          textAnchor="middle"
          fontSize="10"
          fill="#333"
          fontWeight="500"
        >
          सेवा
        </text>

        {/* Bottom curved text - पुणे-पिंपरी-चिंचवड महानगर */}
        <path
          id="bottomArc"
          d="M 20 70 A 50 50 0 0 0 120 70"
          fill="none"
        />
        <text fontSize="7" fill="#333" fontWeight="500">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            पुणे-पिंपरी-चिंचवड महानगर
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default PMPMLLogo;
