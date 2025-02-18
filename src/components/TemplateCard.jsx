import { Link } from 'react-router-dom';

function TemplateCard({
  id,
  templateNumber,
  templateDescription,
  templateImage,
  templateLinkName,
  templateBackground,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="p-10" style={{ background: templateBackground }}>
        <img src={`/assets/${templateImage}`} alt={templateImage} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
          {templateNumber}
        </h3>
        <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
          {templateDescription}
        </p>
      </div>
      <Link
        to={`/read-case/${id}`}
        className="group flex items-center gap-4 font-poppins text-base font-medium leading-6 text-dark-blue hover:text-hover-black"
      >
        {templateLinkName}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
        >
          <path
            d="M24.7071 8.7071C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928931C17.9526 0.538406 17.3195 0.538406 16.9289 0.928931C16.5384 1.31946 16.5384 1.95262 16.9289 2.34314L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.7071ZM8.74228e-08 9L24 9L24 7L-8.74228e-08 7L8.74228e-08 9Z"
            className="group-hover:stroke-hover-black"
            fill="#282938"
          />
        </svg>
      </Link>
    </div>
  );
}

export default TemplateCard;
