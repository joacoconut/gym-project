import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

export const Footer = () => {
    return (
        <Box mt="80px" pb="30px" bgcolor="#FFF3F4">
            <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
                <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
            </Stack>
        </Box>
    )
}
