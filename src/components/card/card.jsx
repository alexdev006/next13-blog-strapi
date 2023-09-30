import Image from "next/image";

const Card = ({ title, category, summary, isFeatured }) => {
  return (
    <div
      className={`max-w-2xl m-2 overflow-hidden bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 ${
        isFeatured ? `border border-lime-300` : ``
      }`}
    >
      <Image
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
        width={400}
        height={400}
      />

      <div className="p-6">
        <div>
          {/* <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"> */}
          <span className="rounded-full bg-lime-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {category}
          </span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {summary}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
                width={40}
                height={40}
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                Jone Doe
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
