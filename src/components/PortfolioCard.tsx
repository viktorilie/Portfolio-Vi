import React from "react";

interface PortfolioCardProps {
  imageSrc?: string;
  altText: string;
  title: string;
  description?: string;
  githubLink?: string;
  text?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  githubLink,
  text,
}) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <img src={imageSrc} alt={altText} className="img-fluid w-100" />
      </div>
      <div className="d-flex p-3">
        <h6 className="fw-bold card-title">{title}</h6>
        <p className="card-text">{description}</p>
      </div>
      <a
        href={githubLink}
        className="card-link"
        target="_blank"
        rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};

export default PortfolioCard;
