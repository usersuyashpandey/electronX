import React, { useState } from 'react'
import { Box } from '@mui/material'
// import { useTheme } from '@mui/system'
import BhpOutput from './BhpOutput'
import BhpModelConfigData from './BhpModelInput.json'

import { bhpConfigDataType } from './BhpJsonType';
import Header from '../../components/layout/Header'


const Bhp: React.FC = () => {
  // const theme = useTheme();
  const [bhpConfigData] = useState<bhpConfigDataType | undefined>({ ...BhpModelConfigData });

  return (
    <Box
      sx={{
        // mt: -1.7,
        width: "100%",
        height: "calc(100vh-100px)",

      }}
    >
      <Box height="5%">
        <Header />
      </Box>
      <Box mb={1}>
        <BhpOutput data={bhpConfigData} />
      </Box>
    </Box>
  );
};

export default Bhp;
