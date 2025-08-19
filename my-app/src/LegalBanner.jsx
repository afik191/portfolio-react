import React from "react";

const LegalBanner = () => {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "#fff",
      textAlign: "center",
      padding: "10px 20px",
      fontSize: "12px",
      zIndex: 1000
    }}>
      © {new Date().getFullYear()} Afik aharon. כל הזכויות שמורות. התוכן באתר מוצג לצורכי הצגה בלבד ואינו מהווה ייעוץ מקצועי.
    </div>
  );
};

export default LegalBanner;
