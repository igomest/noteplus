import { useState } from "react";

export const useMenu = () => {
    const [openCardOptions, setOpenCardOptions] = useState(false);
    const [openProfileOptions, setOpenProfileOptions] = useState(false);

    const handleOpenProfileOptions = () => {
        setOpenProfileOptions(!openProfileOptions);
    };

    const handleOpenCardOptions = () => {
        setOpenCardOptions(!openCardOptions);
    }

    return [
        openCardOptions,
        handleOpenCardOptions,
        openProfileOptions,
        handleOpenProfileOptions
    ] as const;
}
