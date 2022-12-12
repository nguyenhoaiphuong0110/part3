import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useNavbar = (props = {}) => {
    const history = useHistory();

    const handleNavbarToHomePage = useCallback(() => {
        history.push('/');
    }, [history]);

    const handleNavbarToYourProject = useCallback(() => {
        history.push('/your-project');
    }, [history]);

    const handleNavbarToSettingProject = useCallback(() => {
        history.push('/setting-project');
    },[history]);
    

    return {
        handleNavbarToHomePage,
        handleNavbarToYourProject,
        handleNavbarToSettingProject
    };
};

export default useNavbar;