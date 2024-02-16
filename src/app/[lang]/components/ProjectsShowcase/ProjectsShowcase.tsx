import Image from 'next/image';
import jimGymThumbnail from '/public/jimgym.webp';
import NewTabImage from '/public/newTab.svg';
import { getDictionary } from '@/dictionaries';

const ProjectShowcase = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const { title, project1Title, project1Description, yourProject } =
    dictionary.projects;
  const projects = [
    {
      id: 1,
      name: project1Title,
      description: project1Description,
      imageUrl: jimGymThumbnail,
      url: 'https://pixelperfect.hr',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto container">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            className="bg-white max-h-[50vh] flex flex-col shadow-lg rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            key={project.id}
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={project.imageUrl}
              alt={project.name}
              className="w-full object-cover object-center overflow-auto"
            />
            <div className="flex flex-wrap p-8 place-items-center">
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
                className="flex justify-center items-center w-8 h-8"
              >
                <NewTabImage />
              </a>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden text-center p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-black mb-4"
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
          <h3 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800">
            {yourProject}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
