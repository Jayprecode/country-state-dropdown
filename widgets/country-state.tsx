/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import CountryDropdown from "@/components/dropdown/countries";
import StateDropdown from "@/components/dropdown/states";

const CountryState = () => {
    return (
        <div className="flex w-[1000px] items-center justify-center gap-4">
            <CountryDropdown />
            <StateDropdown />
        </div>
    );
};

export default CountryState;
