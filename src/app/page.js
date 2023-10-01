import Card from "@/components/card/card";
import config from "@/config";
import fetchBlogs from "@/utils/fetch-blog";

const Home = async () => {
  //const allBlogs = await fetchBlogs();
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs(`filters[isFeatured][$eq]=true`),
    await fetchBlogs(`filters[isFeatured][$eq]=false`),
  ]);

  return (
    <>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto ">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="py-2 text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
              @ Le blog !
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
        </div>
      </section>
      <p className="text-xl font-bold text-white">Featured posts:</p>
      <div className="grid items-center justify-center grid-cols-1 border xl:grid-cols-2 2xl:grid-cols-3">
        {featuredBlogs?.data?.map((featuredBlog) => (
          <Card
            key={featuredBlog.id}
            category={featuredBlog.attributes.Category}
            title={featuredBlog.attributes.Title}
            summary={featuredBlog.attributes.Summary}
            href={`${featuredBlog.attributes.slug}`}
            isFeatured={featuredBlog.attributes.isFeatured}
            imgSrc={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
            thumbnail={`${config.api}${featuredBlog.attributes.Thumbnail.data.attributes.url}`}
            createdAt={featuredBlog.attributes.createdAt}
          />
        ))}
      </div>
      <p className="text-xl font-bold text-white">Posts:</p>
      <div className="grid items-center justify-around grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 ">
        {blogs?.data?.map((blog) => (
          <Card
            key={blog.id}
            category={blog.attributes.Category}
            title={blog.attributes.Title}
            summary={blog.attributes.Summary}
            href={`${blog.attributes.slug}`}
            isFeatured={blog.attributes.isFeatured}
            imgSrc={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
            thumbnail={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
          />
        ))}
      </div>
    </>
  );
};

export default Home;