import UserProfileForm from "../../../components/common/user"
import PrimarySearchAppBar from "../../../components/common/navBar"
import Footer from "../../../components/common/footer"
function Usuario() {

    return(
        <div style={{backgroundColor:'#E5E7EB'}}>
            <PrimarySearchAppBar />
            <div style={{marginTop:'3%',marginBottom:'5%'}}>
                <UserProfileForm/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Usuario