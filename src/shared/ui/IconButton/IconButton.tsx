type IconButtonProps = {
  imagePath: string;
  imageAlt: string;
  onClick: () => void;
  className?: string;
};

export const IconButton = ({
  imagePath,
  imageAlt,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <img src={imagePath} alt={imageAlt} />
    </button>
  );
};
