// components/SectionLabel.jsx
// Reusable section header used by all sections (e.g. "01 About")

export default function SectionLabel({ num, label }) {
  return (
    <div className="sec-label">
      <span>{num}</span>
      {label}
    </div>
  );
}
