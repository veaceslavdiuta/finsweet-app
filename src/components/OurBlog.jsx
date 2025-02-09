function OurBlog() {
  const blogPosts = [
    {
      id: 1,
      blogData: '19 Jan 2022',
      blogName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      blogDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      blogImage: 'imgBlog1.png',
    },
    {
      id: 2,
      blogData: '19 Jan 2022',
      blogName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      blogDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      blogImage: 'imgBlog2.png',
    },
    {
      id: 3,
      blogData: '19 Jan 2022',
      blogName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      blogDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      blogImage: 'imgBlog3.png',
    },
  ];
  return (
    <section className="flex w-full justify-center py-32">
      <div className="flex w-full max-w-screen-xl flex-col gap-16">
        <h3 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Our blog
        </h3>
        <div className="grid grid-cols-3 gap-8">
          {blogPosts.map(
            ({ id, blogData, blogName, blogDescription, blogImage }) => (
              <div className="flex flex-col gap-4" key={id}>
                <img src={`/assets/${blogImage}`} alt={blogImage} />
                <p className="font-poppins text-base font-medium leading-7 text-dark-blue opacity-70">
                  {blogData}
                </p>
                <h5 className="font-poppins text-2xl font-normal leading-9 text-dark-blue">
                  {blogName}
                </h5>
                <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
                  {blogDescription}
                </p>
                <button className="flex items-center gap-4 text-base font-medium leading-7">
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
                      fill="#282938"
                    />
                  </svg>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
