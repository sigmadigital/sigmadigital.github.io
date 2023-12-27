import { Section } from "@/components/section";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Database, Devices, Gear, MapTrifold } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { green } from "tailwindcss/colors";

export default function Skill() {
  const data = [
    {
      "id": 0,
      "icons": <Database size={42} color={green[600]} weight="duotone" />,
      "title": "Geodatabase Architecture",
      "description": "Effective geodatabase design is crucial for organizing and structuring spatial data in a way that ensures efficiency, integrity, and optimal performance of information retrieval."
    },
    {
      "id": 1,
      "icons": <Devices size={42} color={green[600]} weight="duotone" />,
      "title": "Application Development",
      "description": "Off-the-shelf applications can only take you so far. Custom applications offer tailored solutions that precisely address unique business needs, providing a competitive advantage."
    },
    {
      "id": 2,
      "icons": <MapTrifold size={42} color={green[600]} weight="duotone" />,
      "title": "Cartography Automation",
      "description": "Manually designing and printing maps can quickly become a tedious and error-prone process. Leverage cutting-edge cartography automation applications and frameworks to streamline the entire process."
    },
    {
      "id": 3,
      "icons": <Gear size={42} color={green[600]} weight="duotone" />,
      "title": "Geoprocessing Pipeline Design",
      "description": "Performant, well-designed geoprocessing pipelines derive meaningful insights from geographic information, facilitating informed decision-making."
    }
  ];

  return (
    <Section title="Skills" id="skill">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
        {data.map(item =>
          <motion.div
            key={item.id}
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
              delay: item.id * 0.25
            }}
          >
            <Card className="mb-4 md:mb-0">
              <CardHeader className="flex gap-3">
                {item.icons}
                <div className="flex flex-col">
                  <p className="text-md">{item.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{item.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </div>
    </Section>
  )
}