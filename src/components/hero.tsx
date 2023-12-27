import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useMediaQuery } from "usehooks-ts";

export default function Hero() {
  const isWidthLargerThanMd = useMediaQuery('(min-width: 768px)')

  return (
    <section className="w-full min-h-screen md:h-screen flex flex-col md:justify-center md:items-center" id="hero">
      <div className="container flex flex-col-reverse md:grid md:grid-cols-2 max-w-4xl md:gap-4">
        <div className="p-4 md:p-6 md:pr-3 lg:p-0">
          <div className="text-gray-700 dark:text-green-600 dark:font-semibold mb-2">Hello, my name is</div>
          <div className="font-extrabold text-gray-800 dark:text-green-400 text-6xl tracking-tighter mb-2">João Victor</div>
          <div className="font-bold text-gray-600 dark:text-green-500 tracking-tighter text-4xl mb-6">I develop solutions for complex problems.</div>
          <div className="text-justify">
            Software engineer consultant specialized in developing mission-critical geospatial applications.
            Currently, I&apos;m focused on designing enterprise-grade, geo-enabled
            solutions at <Link isExternal showAnchorIcon href="https://atos.net/">Atos</Link> for
            utility companies.
          </div>
          <Button color="success" href="#" variant="flat" className="mt-2">
            Get in touch
          </Button>
        </div>
        <div className="p-4 md:p-6 md:pl-3 lg:p-0 w-full h-full">
          <motion.div
            initial={isWidthLargerThanMd ? { opacity: 0, x: 20 } : { opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            exit={{
              opacity: 0,
              x: isWidthLargerThanMd ? 20 : 0,
              y: isWidthLargerThanMd ? 0 : -20,
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
          >
            <Image
              priority={false}
              className="h-full w-full aspect-square rounded-xl"
              src="/profile.jpeg"
              width={540}
              height={540}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
      </div>
    </section>)
}