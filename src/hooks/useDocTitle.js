import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - GadgetGrid`;
        } else {
            document.title = 'GadgetGrid | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
