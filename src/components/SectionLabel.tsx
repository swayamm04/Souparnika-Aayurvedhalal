interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => (
  <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">
    {label}
  </span>
);

export default SectionLabel;
