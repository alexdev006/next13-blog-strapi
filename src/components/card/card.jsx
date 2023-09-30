import Image from "next/image";

import DateFormatFr from "@/utils/dateFormat";

const Card = ({
  title,
  category,
  summary,
  imgSrc,
  thumbnail,
  createdAt,
  href,
}) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 w-96">
      <Image
        className="object-cover w-full h-64"
        src={imgSrc}
        alt="Article"
        width={400}
        height={400}
      />

      <div className="p-6">
        <div>
          <div className="flex flex-wrap gap-1 mt-4">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              {category}
            </span>
          </div>
          <a
            href={href}
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
                src={thumbnail}
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
              {DateFormatFr(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
