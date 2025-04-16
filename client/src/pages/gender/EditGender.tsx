import EditGenderForm from "../../components/forms/EditGenderForm";
import MainLayout from "../layout/mainLayout";


const EditGender = () => {
    const content = (
        <>
        <div className="d-flex justify-content-center">
            <div className="col-md-3">
                <EditGenderForm />
            </div>
        </div>
        </>
    );
    return <MainLayout content={content} />;
};

export default EditGender;