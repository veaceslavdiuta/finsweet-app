import BlogCard from './BlogCard';

function BlogPosts() {
  const posts = [
    {
      id: 1,
      postData: '19 Jan 2022',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost1.png',
    },
    {
      id: 2,
      postData: '19 Jan 2022',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost2.png',
    },
    {
      id: 3,
      postData: '19 Jan 2022',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost3.png',
    },
    {
      id: 4,
      postData: '27 Jan 2023',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost4.png',
    },
    {
      id: 5,
      postData: '13 Jan 2023',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost5.png',
    },
    {
      id: 6,
      postData: '11 Jan 2023',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost6.png',
    },
    {
      id: 7,
      postData: '19 Jan 2023',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost7.png',
    },
    {
      id: 8,
      postData: '19 Jan 2022',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost8.png',
    },
    {
      id: 9,
      postData: '11 Jan 2022',
      postName:
        'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      postDescription:
        'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
      postImage: 'imgPost9.png',
    },
  ];
  return (
    <section className="flex w-full justify-center pb-32">
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12">
        <h2 className="font-poppins text-5xl font-semibold leading-snug text-dark-blue">
          Our Blog
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-16">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
