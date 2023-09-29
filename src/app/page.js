import Card from "@/components/card/card";

export default function Home() {
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
      <div className="grid content-center grid-cols-1 justify-items-center xl:grid-cols-2 2xl:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
