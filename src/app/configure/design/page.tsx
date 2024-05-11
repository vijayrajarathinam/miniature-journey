import { notFound } from "next/navigation";
import DesignConfiguration from "./DesignConfiguration";
import { db } from "@/db";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) return notFound();

  const { imageUrl, width, height } = configuration;
  return (
    <DesignConfiguration
      configId={id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
};

export default page;
