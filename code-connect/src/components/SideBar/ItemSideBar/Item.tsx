import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  texto: string;
  className: string;
}

const Item = ({ texto, className, ...props }: ImageProps) => {
  return (
    <li>
      <a href="#" className={className}>
        <img {...props} />
        <span>{texto}</span>
      </a>
    </li>
  );
};

export default Item;
