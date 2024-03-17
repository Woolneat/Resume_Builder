// import React,{ useState } from 'react';
// import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// import { Box, AppBar, Toolbar } from '@mui/material';
// import { Typography } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';

// function LoginSignupButton() {
//   const [alignment, setAlignment] = useState('login');

//   const handleAlignmentChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <AppBar position="fixed" sx={{ top: 0, right: 0 }}>
//       <Toolbar>
//         <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//           <AccountCircle />
//           <Typography variant="h6" noWrap component="div" sx={{ pl: 2 }}>
//             Title
//           </Typography>
//         </Box>
//         <ToggleButtonGroup
//           value={alignment}
//           exclusive
//           onChange={handleAlignmentChange}
//           sx={{ mr: 2 }}
//         >
//           <ToggleButton value="login" aria-label="login">
//             Login
//           </ToggleButton>
//           <ToggleButton value="signup" aria-label="signup">
//             Sign up
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default LoginSignupButton;