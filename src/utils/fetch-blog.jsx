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

export default fetchBlogs;
