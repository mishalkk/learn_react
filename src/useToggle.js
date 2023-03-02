import { useState } from "react";

export const useToggle = (intialVal=false) => {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState((prev) => !prev)
    };

    // if return as {object} variable name can't be change
    return [state, toggle];
};