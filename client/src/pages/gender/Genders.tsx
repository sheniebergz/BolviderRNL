import AddGenderForm from "../../components/forms/AddGenderForm";
import GenderTable from "../../components/tables/GenderTable";
import MainLayout from "../layout/mainLayout";

 
 
 const Genders = () => {
  const content = (
   <>
   <div className="row">
    <div className="col-4">
        <AddGenderForm />
    </div>
       <div className="col-8">
           <GenderTable/>
        </div> 
   </div>
   </>
  );

  return <MainLayout content={content} />;
};

export default Genders;