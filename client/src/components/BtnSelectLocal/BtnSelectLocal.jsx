import s from './BtnSelectLocal.module.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useLocalContext } from '../../hooks/localHook/localHook';
import Palette from '../Palette/Palette';

const BtnSelectLocal = ({ className }) => {
  const { language, changeLocal } = useLocalContext();
    const [alignment, setAlignment] = useState(language);

    const handleChange = (event, language ) => {
        if(language == null) return;
        setAlignment(language);
        changeLocal(language);
    };

  return (
    <Palette>
      <div className={className}>
          <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          className={s.btn}
          >
          <ToggleButton value="en">EN</ToggleButton>
          <ToggleButton value="esp">ESP</ToggleButton>
          </ToggleButtonGroup>
      </div>
    </Palette>
  );
};

export default BtnSelectLocal;