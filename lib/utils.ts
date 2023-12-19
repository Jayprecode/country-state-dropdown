import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Function to capitalize the first letter
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to lowercase the first letter
export const lowercaseFirstLetter = (string: string): string => {
    return string.charAt(0).toLowerCase() + string.slice(1);
};

export const sentenceCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const lowerCase = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase();
};

export const titleCase = (str: string): string => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
