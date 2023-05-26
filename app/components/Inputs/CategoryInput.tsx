"use client"

import { IconType } from "react-icons";

interface categoryInputProps {
    icon: IconType;
    label: string;
    selected: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<categoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={''}
        >

        </div>
    );
}

export default CategoryInput;