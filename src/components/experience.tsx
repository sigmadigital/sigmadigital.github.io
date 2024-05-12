import { Section } from "@/components/section";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const data = [
    {
      "id": 0,
      "logo": "/atos.jfif",
      "title": "Atos",
      "url": "https://atos.net/en/",
      "from": "11/2022",
      "description": "Delivered high-quality web and desktop applications for some of the world's lagest utility companies. Provided leadership in infrastructure planning for high-availability ArcGIS Enterprise deployments. Collaborated on intense spatial data engineering tasks, delivering coherent governing datasets.",
      "tags": ["TypeScript", "React", "Python", "C#", "ArcGIS", "Oracle", "FME"]
    },
    {
      "id": 1,
      "logo": "/imagem.jfif",
      "title": "Imagem Geosistemas",
      "url": "https://www.img.com.br/pt-br/home",
      "from": "07/2021",
      "to": "11/2022",
      "description": "Designed high-performance geoprocessing pipelines leveraging the full potential of ArcGIS Enterprise deployments for utility companies and regulatory bodies, minding the latest observability and deployment techniques. Collaborated on web application development facilitating informed decision-making and custom report generation.",
      "tags": ["TypeScript", "React", "Python", "Java", "ArcGIS", "SQL Server", "Elastic Stack", "Containerization"]
    },
    {
      "id": 2,
      "logo": "/kpmg.jfif",
      "title": "KPMG",
      "url": "https://kpmg.com/br/pt/home.html",
      "from": "11/2020",
      "to": "07/2021",
      "description": "Worked on SAP S/4HANA migrations from ECC deployments for the world's largest sugar-energy company.",
      "tags": ["SAP", "HANA", "ABAP", "JavaScript", "UI5"]
    },
    {
      "id": 3,
      "logo": "/gt.jfif",
      "title": "GT",
      "url": "https://youxgroup.com.br/",
      "from": "05/2019",
      "to": "03/2021",
      "description": "Developed several web and mobile mission-critical, geo-enabled applications for government entities and large agricultural companies. Designed cartography and reporting pipelines, automating time-consuming legal processes.",
      "tags": ["JavaScript", "React", "Python", "Java", "ArcGIS", "PostgreSQL", "Swift"]
    }
  ]

  return (
    <Section title="Work experience" id="experience">
      <div className="relative flex flex-col">
        {data.map((item) =>
          <div key={item.id} className="flex flex-row mb-4 md:mb-6">
            <motion.div
              className="w-12 md:w-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              exit={{
                opacity: 0,
                x: -20,
                transition: {
                  opacity: {
                    delay: 0.1
                  },
                }
              }}
              transition={{
                duration: 0.5,
                delay: 1.25
              }}
            >
              <a href={item.url}>
                <Image
                  className="w-full aspect-square rounded-xl shadow-xl dark:shadow-none"
                  src={item.logo}
                  width={50}
                  height={50}
                  alt="Company logo"
                />
              </a>
            </motion.div>
            <motion.div
              className="flex-1 ml-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  opacity: {
                    delay: 0.1
                  },
                }
              }}
              transition={{
                duration: 0.5,
                delay: 1
              }}
            >
              <div className="text-gray-600 dark:text-green-700 text-sm pb-1">
                from {item.from} {item.to ? `to ${item.to}` : ""}
              </div>
              <div className="font-bold text-gray-700 dark:text-green-500 tracking-tighter text-2xl pb-1 md:pb-2">
                <a href={item.url}>{item.title}</a>
              </div>
              <div className="text-justify pb-1">
                {item.description}
              </div>
              <div>
                {item.tags.map(tag =>
                  <Chip key={tag} color="success" variant="flat" className="mr-2 mb-1">{tag}</Chip>
                )}
              </div>
            </motion.div>
          </div>
        )}
        <motion.div
          className="absolute left-6 md:left-8 w-0.5 h-full bg-gray-300 dark:bg-green-700 -z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: 20,
            transition: {
              opacity: {
                delay: 0.1
              },
            }
          }}
          transition={{
            duration: 0.5,
            delay: 0.25
          }}
        />
      </div>
    </Section>
  )
}