import { url } from 'inspector';
import Image from 'next/image';
const projects = [
  {
    id: 1,
    name: "Jim's Gym",
    description: 'Najmodernija teretana u Hrvatskoj',
    imageUrl: '/jimgym.webp',
    url: 'https://pixelperfect.hr',
  },
  // Add more projects as needed
];

const ProjectShowcase = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
          Projekti
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            className="bg-white flex flex-col h-[50vh] shadow-lg rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            key={project.id}
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-[35vh] object-cover object-center"
            />
            <div className="flex flex-wrap p-8">
              <div className="grow">
                <h3 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                  {project.name}
                </h3>
                <p className="sm:text-l md:text-xl lg:text-2xl xl:text-3xl text-gray-600">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                <Image
                  width={144}
                  height={144}
                  src="/newTabIcon.svg"
                  alt="Visit"
                  className="w-8 h-8"
                  role="button"
                />
              </a>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden text-center p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-800">
            Vaš projekt ovdje
          </h3>
          <p className="text-gray-600">
            Stupite u kontakt sa mnom preko forme dolje
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
