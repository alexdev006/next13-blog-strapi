import Image from "next/image";

const PostDetail = () => {
  return (
    <article className="px-6 mx-auto mt-24 max-w-7xl lg:px-8 sm:mt-32 lg:mt-40 text-slate-200">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <header className="flex flex-col max-w-5xl mx-auto text-center">
          <p className="text-xs">- 23 Septembre 2023 -</p>
          <h1 className="mt-6 font-display text-5xl font-medium tracking-tight[text-wrap:balance] sm:text-6x">
            The Future of Web Development: Our Predictions for 2023
          </h1>
          <p className="mt-6 text-sm font-semibold">par Alexandre.G</p>
        </header>
      </div>
      <div className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40">
        <div className="">
          <h2 className="mb-5 text-3xl font-bold">
            1. AI Assisted Development
          </h2>
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            glimpse at what it would look like to have Stack Overflow plumbed
            straight into your IDE. Copilot has given thousands of developers
            what they always longed for: plausible deniability over the bugs
            they write.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1695983953103-17bce53a8138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2642&q=80"
            alt="milkyway"
            width={700}
            height={400}
            className="w-full rounded-xl "
          />
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            straight into your IDE. Copilot has given thousands of developers.
          </p>
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            glimpse at what it would look like to have Stack Overflow plumbed
            straight into your IDE. Copilot has given thousands of developers
            what they always longed for: plausible deniability over the bugs
            they write.
          </p>
        </div>
        <div className="mt-24">
          <h2 className="mb-5 text-3xl font-bold">2. Rendering Patterns</h2>
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            glimpse at what it would look like to have Stack Overflow plumbed
            straight into your IDE. Copilot has given thousands of developers
            what they always longed for: plausible deniability over the bugs
            they write.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1682686581362-796145f0e123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="milkyway"
            width={700}
            height={400}
            className="w-full rounded-xl "
          />
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            straight into your IDE. Copilot has given thousands of developers.
          </p>
          <p className="my-10 text-xl">
            With the launch of Github Copilot in 2022 the industry got its first
            glimpse at what it would look like to have Stack Overflow plumbed
            straight into your IDE. Copilot has given thousands of developers
            what they always longed for: plausible deniability over the bugs
            they write.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
