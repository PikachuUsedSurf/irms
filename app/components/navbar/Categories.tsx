"use client";

import Container from "@/app/components/Container";
import {
  TbReportAnalytics,
  TbFileReport,
  TbReportSearch,
  TbSettings2,
} from "react-icons/tb";
import CategoryBox from "@/app/components/CategoryBox";
import { usePathname, useSearchParams } from "next/dist/client/components/navigation";

export const categories = [
  {
    label: "Reports",
    icon: TbReportAnalytics,
    description: "This is the place to add reports",
  },
  {
    label: "Drafts",
    icon: TbFileReport,
    description: "This is the place to see reports",
  },
  {
    label: "Create Report",
    icon: TbReportSearch,
    description: "This is the place to see create report",
  },
  {
    label: "Settings",
    icon: TbSettings2,
    description: "This is the place to see settings",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className={`pt-4 flex flex-row items-center justify-between overflow-x-auto`}>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
