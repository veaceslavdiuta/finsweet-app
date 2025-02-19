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
    <main className="container mx-auto max-w-screen-xl py-32">
      {post && (
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-6">
            <h1 className="w-[75%] text-center font-poppins text-5xl font-semibold leading-snug text-dark-blue">
              {post.postName}
            </h1>
            <h5 className="flex gap-4 font-poppins text-base font-medium leading-7 text-dark-blue">
              <span className="opacity-85">{post.postAuthor}</span>
              Posted on {post.postData}
            </h5>
            <img
              className="h-1/2 w-full"
              src={`/assets/${post.postImage}`}
              alt="FeaturedBlog"
            />
          </div>
          <div className="flex w-[840px] flex-col gap-8">
            <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
              {post.postTitle}
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              {post.postTitleDescr}
            </p>
            <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
              {post.aboutPost}
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              {post.aboutPostDescr}
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-[18px]">
              {post.aboutPostSteps.map((step, index) => (
                <li
                  key={index}
                  className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70"
                >
                  {step}
                </li>
              ))}
            </ul>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              {post.aboutPostFin}
            </p>
            <img src="/assets/readBlog2.jpg" alt="blog-image" />
            <h3 className="font-poppins text-4xll font-semibold leading-normal text-dark-blue">
              {post.postConclusionTitle}
            </h3>
            <p className="font-poppins text-base font-normal leading-7 text-dark-blue opacity-70">
              {post.postConclusionDescr}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default ReadBlog;
