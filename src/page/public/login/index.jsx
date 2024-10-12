import React from "react";
import P_Login from "../../../components/common/paper_login";
import { Box } from "@mui/material";
import Footer from "../../../components/common/footer";
import PrimarySearchAppBar from "../../../components/common/navBar";

function Login(){

    return(

        <Box sx={{}}>

         <PrimarySearchAppBar/>
        <Box sx={{marginBottom:{lg:'22%',xl:'22%',md:'27.5%',sm:'0.5%',xs:'0.5%'},marginTop:'10%'}}>
            <P_Login />
        </Box>
         
        <Box sx={{}}>
            <Footer/>
        </Box>
         
        </Box>
       
    )
}

export default Login;