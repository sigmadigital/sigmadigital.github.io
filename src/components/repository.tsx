import { Card, CardBody, CardHeader, Chip, Divider } from "@nextui-org/react";
import { SmileySad } from "@phosphor-icons/react";
import { green } from "tailwindcss/colors";
import { motion } from "framer-motion";
import useSWRImmutable from "swr/immutable";
import Link from "next/link";

type RepositoryProps = {
  icon: React.ReactNode;
  name: string;
  id: number;
};

type RepositoryResponse = {
  name: string;
  description: string;
  html_url: string;
};

type LanguagesResponse = {
  [key: string]: number;
};

type TagsResponse = {
  name: string;
};

type FetcherResponse = RepositoryResponse & {
  languages: string[];
  version: string | undefined;
};

export default function Repository({ icon, name, id }: RepositoryProps) {

  async function fetcher(key: string) {
    const repositoryUrl = `https://api.github.com/repos/${key}`;
    const repositoryResponse = await fetch(repositoryUrl);
    if (!repositoryResponse.ok) {
      throw new Error();
    }
    const repositoryResult: RepositoryResponse = await repositoryResponse.json();

    const languagesUrl = `https://api.github.com/repos/${key}/languages`;
    const languagesResponse = await fetch(languagesUrl);
    if (!languagesResponse.ok) {
      throw new Error();
    }
    const languagesResult: LanguagesResponse = await languagesResponse.json();

    const tagsUrl = `https://api.github.com/repos/${key}/tags`;
    const tagsResponse = await fetch(tagsUrl);
    if (!tagsResponse.ok) {
      throw new Error();
    }
    const tagsResult: TagsResponse[] = await tagsResponse.json();

    const result: FetcherResponse = {
      ...repositoryResult,
      languages: Object.keys(languagesResult),
      version: tagsResult.at(0)?.name
    };
    return result;
  }

  const { data, error, isLoading } = useSWRImmutable<FetcherResponse>(name, fetcher, {
    shouldRetryOnError: false
  });

  if (error) {
    return (
      <Card className="mb-4 md:mb-0">
        <CardHeader className="flex justify-between items-center cursor-pointer">
          <div className="text-lg font-semibold">Error</div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex items-start space-x-4 text-small">
            <SmileySad size={64} color={green[600]} />
            <div className="flex-1 ml-4">
              <p className="text-justify">Couldn&apos;t retrive data for the repository {name}.</p>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }

  if (!isLoading) {
    return (
      <motion.div
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
          delay: id * 0.25
        }}
      >
        <Link href={data?.html_url || ""} target="_blank" aria-label="Visit repository homepage">
          <Card className="mb-4 md:mb-0" isPressable>
            <CardHeader className="flex justify-between items-center">
              <div className="text-lg font-semibold">{data?.name}</div>
              <div className="text-small text-gray-600 dark:text-green-500">{data?.version}</div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex items-center space-x-4 text-small">
                {icon}
                <div className="flex-1 md:pl-4 pr-4">
                  <p className="text-justify text-small md:text-medium">{data?.description}</p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                {data?.languages.map((language, index) => (
                  <Chip key={index} color="success" variant="flat" className="mr-2 mb-1">{language}</Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        </Link>
      </motion.div>
    );
  }
}