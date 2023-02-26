import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AllProducts from "./allproducts";
import FavoriteList from "./favoriteList";
import FollowList from './followList'
const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    paddingRight: theme.spacing(5),
    color: theme.palette.mode === "light" ? "gray" : "white",
    opacity: 0.5,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.mode === "light" ? "gray" : "white",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "white",
      background: "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
      borderRadius: "5px",

      opacity: 1,
    },

    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
              mb: 1,
            },
          }}
        >
          <AntTab label="All Nfts" {...a11yProps(0)} />
          <AntTab label="Favourite" {...a11yProps(1)} />
          <AntTab label="Follow" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box className="scroolbox"
                sx={{
                  height:"500px",
                  overflowY: "scroll",
                  mt:2,
                  py:{xs:1,md:1},
                  px:{xs:1,md:2},
                  boxShadow:2,
                  borderRadius:'10px'
                 
                 
                }}>

      <TabPanel value={value} index={0}>
        <AllProducts AllNfts={true} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FavoriteList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FollowList />
      </TabPanel>
      </Box>
    </Box>
  );
}
