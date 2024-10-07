import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


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
              {index < paths.length - 1 && (
                <BreadcrumbLink asChild>
                  <Link href="#">{path}</Link>
                </BreadcrumbLink>
              )}
              {index === paths.length - 1 && (
                <BreadcrumbPage>{path}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < paths.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
