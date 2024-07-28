import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from "@nextui-org/react";
import { Books, GitFork, Link, Planet, Star } from "@phosphor-icons/react";
import { green, black } from "tailwindcss/colors";
import { useTheme } from "next-themes";
import useSWR from "swr";

type RepositoryProps = {
  icon: React.ReactNode;
  name: string;
};

type RepositoryResponse = {
  name: string;
  description: string;
  url: string;
};

type LanguagesResponse = {
  [key: string]: number;
};

type FetcherResponse = RepositoryResponse & {
  languages: string[];
};

export default function Repository({ icon, name }: RepositoryProps) {

  async function fetcher(key: string) {
    const repositoryUrl = `https://api.github.com/repos/${key}`;
    const repositoryResponse = await fetch(repositoryUrl);
    const repositoryResult: RepositoryResponse = await repositoryResponse.json();

    const languagesUrl = `https://api.github.com/repos/${key}/languages`;
    const languagesResponse = await fetch(languagesUrl);
    const languagesResult: LanguagesResponse = await languagesResponse.json();

    const result: FetcherResponse = {
      ...repositoryResult,
      languages: Object.keys(languagesResult)
    };
    return result;
  }

  const { theme } = useTheme();

  const { data, error, isLoading } = useSWR<FetcherResponse>(name, fetcher);

  return (
    <Card className="mb-4 md:mb-0">
      <CardHeader className="flex justify-between items-center">
        <div className="text-lg font-semibold">{data?.name}</div>
        <Link size={24} />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex items-start space-x-4 text-small">
          {icon}
          <div className="flex-1 ml-4">
            <p className="text-justify">{data?.description}</p>
          </div>
        </div>
        <div className="flex items-center mt-2">
          {data?.languages.map(language => (
            <Chip color="success" variant="flat" className="mr-2 mb-1">{language}</Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <ButtonGroup className="w-full" variant="flat">
          <Button className="flex-1"><Star size={18} color={theme === "light" ? black : green[600]} weight="fill" />Star</Button>
          <Button className="flex-1"><GitFork size={18} color={theme === "light" ? black : green[600]} weight="fill" />Fork</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}