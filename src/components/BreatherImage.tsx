interface BreatherImageProps {
  src: string;
  alt: string;
}

const BreatherImage = ({ src, alt }: BreatherImageProps) => (
  <div className="w-full h-[50vh] overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

export default BreatherImage;
