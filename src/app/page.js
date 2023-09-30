import Card from "@/components/card/card";
import config from "@/config";

const fetchBlogs = async (params) => {
  //need try catch ici
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};
const Home = async () => {
  // const featuredBlogs = await fetchBlogs(`&filters[isFeatured][$eq]=true`);
  // const blogs = await fetchBlogs(`&filters[isFeatured][$eq]=false`);
  const [featuredBlogs, blogs, allBlogs] = await Promise.all([
    await fetchBlogs(`filters[isFeatured][$eq]=true`),
    await fetchBlogs(`filters[isFeatured][$eq]=false`),
    await fetchBlogs(),
  ]);
  console.log("🚀 ~ file: page.js:18 ~ Home ~ blogs:", blogs.data);

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

      <div className="grid content-center grid-cols-1 mx-auto justify-items-center xl:grid-cols-2 2xl:grid-cols-3">
        {allBlogs.data.map((featuredBlog) => (
          <Card
            key={featuredBlog.id}
            category={featuredBlog.attributes.Category}
            title={featuredBlog.attributes.Title}
            summary={featuredBlog.attributes.Summary}
            href={`${featuredBlog.attributes.slug}`}
            isFeatured={featuredBlog.attributes.isFeatured}
          />
        ))}
      </div>
    </>
  );
};

//mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24

export default Home;