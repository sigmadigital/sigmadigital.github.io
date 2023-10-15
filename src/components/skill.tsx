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
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula"
    },
    {
      "id": 1,
      "icons": <MapTrifold size={42} color={green[600]} weight="duotone" />,
      "title": "Cartography Automation",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula"
    },
    {
      "id": 2,
      "icons": <Devices size={42} color={green[600]} weight="duotone" />,
      "title": "Application Development",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula"
    },
    {
      "id": 3,
      "icons": <Gear size={42} color={green[600]} weight="duotone" />,
      "title": "Geoprocessing Pipeline Design",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum nibh in lacus vehicula"
    }
  ];

  return (
    <Section title="What I do">
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