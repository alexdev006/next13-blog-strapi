import Image from "next/image";

const Card = () => {
  return (
    // <article className="m-5 overflow-hidden transition rounded-lg shadow hover:shadow-lg w-80">
    //   <Image
    //     alt="Office"
    //     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    //     className="object-cover w-full h-56"
    //     width={400}
    //     height={300}
    //   />

    //   <div className="p-4 bg-white sm:p-6">
    //     <time datetime="2022-10-10" className="block text-xs text-gray-500">
    //       10th Oct 2022
    //     </time>

    //     <a href="#">
    //       <h3 className="mt-0.5 text-lg text-gray-900">
    //         How to position your furniture for positivity
    //       </h3>
    //     </a>

    //     <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
    //       dolores, possimus pariatur animi temporibus nesciunt praesentium
    //       dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
    //       soluta, voluptates neque explicabo tempora nisi culpa eius atque
    //       dignissimos. Molestias explicabo corporis voluptatem?
    //     </p>
    //   </div>
    // </article>

    // <div className="m-5 overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
    //   <Image
    //     src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg"
    //     className="object-cover w-full h-64"
    //     alt="blog image"
    //     width={400}
    //     height={400}
    //   />
    //   <div className="p-5 border border-t-0">
    //     <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
    //       <a
    //         href="/"
    //         className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
    //         aria-label="Category"
    //         title="traveling"
    //       >
    //         traveling
    //       </a>
    //       <span className="text-gray-600">— 28 Dec 2020</span>
    //     </p>
    //     <a
    //       href="/"
    //       aria-label="Category"
    //       title="Visit the East"
    //       className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
    //     >
    //       Visit the East
    //     </a>
    //     <p className="mb-2 text-gray-700">
    //       Sed ut perspiciatis unde omnis iste natus error sit sed quia
    //       consequuntur magni voluptatem doloremque.
    //     </p>
    //     <a
    //       href="/"
    //       aria-label=""
    //       className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    //     >
    //       Learn more
    //     </a>
    //   </div>
    // </div>

    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 m-2 cursor-pointer">
      <Image
        class="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
        width={400}
        height={400}
      />

      <div class="p-6">
        <div>
          <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Product
          </span>
          <a
            href="#"
            class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabindex="0"
            role="link"
          >
            I Built A Successful Blog In One Year
          </a>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <Image
                class="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
                width={40}
                height={40}
              />
              <a
                href="#"
                class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabindex="0"
                role="link"
              >
                Jone Doe
              </a>
            </div>
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2015
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
