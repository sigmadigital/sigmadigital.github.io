import { Section } from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const data = [
    {
      "id": 0,
      "logo": "/atos.jfif",
      "title": "Atos",
      "from": "11/2022",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula, quis fringilla urna ornare. Sed felis justo, tincidunt nec pulvinar a, imperdiet quis neque."
    },
    {
      "id": 1,
      "logo": "/imagem.jfif",
      "title": "Imagem Geosistemas",
      "from": "07/2021",
      "to": "11/2022",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula, quis fringilla urna ornare. Sed felis justo, tincidunt nec pulvinar a, imperdiet quis neque."
    },
    {
      "id": 2,
      "logo": "/kpmg.jfif",
      "title": "KPMG",
      "from": "11/2020",
      "to": "07/2021",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula, quis fringilla urna ornare. Sed felis justo, tincidunt nec pulvinar a, imperdiet quis neque."
    },
    {
      "id": 3,
      "logo": "/gt.jfif",
      "title": "GT",
      "from": "05/2019",
      "to": "03/2021",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula, quis fringilla urna ornare. Sed felis justo, tincidunt nec pulvinar a, imperdiet quis neque."
    },
    {
      "id": 4,
      "logo": "/comp_junior.jfif",
      "title": "Comp Júnior",
      "from": "07/2018",
      "to": "06/2020",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula, quis fringilla urna ornare. Sed felis justo, tincidunt nec pulvinar a, imperdiet quis neque."
    }
  ]

  return (
    <Section title="Work experience">
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
              <Image
                className="w-full aspect-square rounded-xl shadow-xl dark:shadow-none"
                src={item.logo}
                width={50}
                height={50}
                alt="Company logo"
              />
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
                {item.title}
              </div>
              <div className="text-justify">
                {item.description}
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