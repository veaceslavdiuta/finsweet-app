import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/posts.services';

function ReadBlog() {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const foundedPost = getPostById(+id);
    setPost(foundedPost);
  }, [id]);

  return (
    <main className="container mx-auto max-w-screen-xl px-8 py-20 lg:py-32 2xl:px-0">
      {post && (
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-3 md:gap-6">
            <h1 className="text-center font-poppins text-3xl font-semibold leading-snug text-dark-blue sm:text-4xl md:text-5xl lg:w-[75%]">
              {post.postName}
            </h1>
            <h5 className="flex gap-4 font-poppins text-sm font-medium leading-7 text-dark-blue sm:text-base">
              <span className="opacity-85">{post.postAuthor}</span>
              Posted on {post.postData}
            </h5>
            <img
              className="h-1/2 w-full"
              src={`/assets/${post.postImage}`}
              alt="FeaturedBlog"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 lg:w-[840px]">
            <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
              {post.postTitle}
            </h3>
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
              {post.postTitleDescr}
            </p>
            <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
              {post.aboutPost}
            </h3>
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
              {post.aboutPostDescr}
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-[18px]">
              {post.aboutPostSteps.map((step, index) => (
                <li
                  key={index}
                  className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base"
                >
                  {step}
                </li>
              ))}
            </ul>
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
              {post.aboutPostFin}
            </p>
            <img src="/assets/readBlog2.jpg" alt="blog-image" />
            <h3 className="font-poppins text-3xl font-semibold leading-normal text-dark-blue sm:text-4xll">
              {post.postConclusionTitle}
            </h3>
            <p className="font-poppins text-sm font-normal leading-7 text-dark-blue opacity-70 sm:text-base">
              {post.postConclusionDescr}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default ReadBlog;
