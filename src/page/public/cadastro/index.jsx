import React from "react";
import P_Cadastro from "../../../components/common/paper_cadastro";
import { Box } from "@mui/material";
import Footer from "../../../components/common/footer";
import PrimarySearchAppBar from "../../../components/common/navBar";

function Cadastro(){

    return(

        <Box sx={{}}>

         <PrimarySearchAppBar/>
        <Box sx={{marginBottom:{lg:'22%',xl:'22%',md:'27.5%',sm:'0.5%',xs:'0.5%'},marginTop:'-1%'}}>
            <P_Cadastro/>
        </Box>
         
        <Box sx={{}}>
            <Footer/>
        </Box>
         
        </Box>
       
    )
}

export default Cadastro;