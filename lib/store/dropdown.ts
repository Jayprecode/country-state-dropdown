import { create } from "zustand";

interface DropdownStateProps {
    countryValue: string;
    setCountryValue: (countries: string) => void;
    openCountryDropdown: boolean;
    setOpenCountryDropdown: (openCountry: boolean) => void;
    stateValue: string;
    setStateValue: (state: string) => void;
    openStateDropdown: boolean;
    setOpenStateDropdown: (openState: boolean) => void;
}

export const useDropdownStore = create<DropdownStateProps>((set) => ({
    countryValue: "",
    setCountryValue: (country: string) => {
        set({ countryValue: country });
    },
    openCountryDropdown: false,
    setOpenCountryDropdown: (openCountry: boolean) => {
        set({ openCountryDropdown: openCountry });
    },
    stateValue: "",
    setStateValue: (state: string) => {
        set({ stateValue: state });
    },
    openStateDropdown: false,
    setOpenStateDropdown: (openState: boolean) => {
        set({ openStateDropdown: openState });
    },
}));
