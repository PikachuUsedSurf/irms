"use client";

import Container from "@/app/components/Container";
import { TbReportAnalytics, TbFileReport, TbReportSearch, TbSettings2  } from 'react-icons/tb';
import CategoryBox from "@/app/components/CategoryBox";

export const categories = [
    {
        label: 'Reports',
        icon: TbReportAnalytics,
        description: 'This is the place to add reports'
    },
    {
        label: 'Drafts',
        icon: TbFileReport,
        description: 'This is the place to see reports'
    },
    {
        label: 'Create Report',
        icon: TbReportSearch,
        description: 'This is the place to see create report'
    },
    {
        label: 'Settings',
        icon: TbSettings2,
        description: 'This is the place to see settings'
    },
]

const Categories = () => {
    return(
        <Container>
            <div className={`pt-4 flex flex-row items-center justify-between overflow-x-auto`}>
                {categories.map((item) => (
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    description={item.description}
                    icon={item.icon}
                    />

                ))}
            </div>
        </Container>
    )
}

export default Categories;