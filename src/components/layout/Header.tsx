import { Box } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const options = [
        { label: 'BHP', value: 'bhp', link: "/bhp" },
        { label: 'Forecast', value: 'forecast', link: "/forecast" }
    ];
    const [selectedOption, setSelectedOption] = useState<string>('bhp');
    const navigate = useNavigate();
    // const theme = useTheme();

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Find the selected option's link and navigate to it
        const selectedOption = options.find(option => option.value === selectedValue);
        if (selectedOption) {
            navigate(selectedOption.link);
        }
    };

    return (
        <Box mt={1} display="flex" flexDirection="row" height="30px" alignItems="center" width="5px">
            {selectedOption !== "bhp" ? <h1>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</h1> : <h1>{selectedOption.toUpperCase()}</h1>}
            <select style={{ marginLeft: "10px" }} id="selectOption" onChange={handleOptionChange} value={selectedOption}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Box>
    );
};

export default Header;
