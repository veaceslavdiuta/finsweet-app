import { Link } from 'react-router-dom';

function BlogCard({ postImage, postData, postName, postDescription }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={`/assets/${postImage}`} alt={postImage} />
      <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
        {postData}
      </p>
      <h5 className="font-poppins text-2xl font-normal leading-9 text-dark-blue">
        {postName}
      </h5>
      <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
        {postDescription}
      </p>
      <Link
        to="/blog"
        className="group flex items-center gap-4 text-base font-medium leading-7 hover:text-hover-black"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="12"
          viewBox="0 0 25 12"
          fill="none"
        >
          <path
            d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
            className="stroke-[#282938] group-hover:stroke-hover-black"
          />
        </svg>
      </Link>
    </div>
  );
}

export default BlogCard;
