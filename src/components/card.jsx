import React from "react";
import Images from "../assets/images";

const card = () => {
  const data = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.church,
    },

    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.fassil,
    },
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.girls,
    },
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.minilik,
    },
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.monk,
    },
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.tana,
    },

    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.prist,
    },
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit vel nisi commodo tincidunt.",
      image: Images.sunset,
    },
  ];
  return (
    <div className="flex flex-col  items-center   ">
      <div className="text-5xl py-20">
        <p>Amazing places</p>
      </div>
      <div className="flex flex-col  md:grid md:grid-cols-2  sm:gap-10 gap-20  ">
        {data.map((item, index) => {
          return index % 2 != 0 ? (
            <a
              data-aos="fade-right"
              href="#"
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
            >
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </a>
          ) : (
            <a
              data-aos="fade-left"
              href="#"
              class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
            >
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <img
                class="object-cover w-full rounded-r-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-e-lg"
                src={item.image}
                alt=""
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default card;
