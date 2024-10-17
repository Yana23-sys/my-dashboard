import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const capitalise = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const createLink = (paths: string[], index: number): string => {
  return `/${paths.slice(0, index + 1).join("/")}`;
}



interface Props {
  paths: string[];
}

export default function BreadcrumbNav({ paths }: Props) {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={createLink(paths, index)}>{capitalise(path)}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < paths.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
