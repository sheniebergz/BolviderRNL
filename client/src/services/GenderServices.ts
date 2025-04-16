import AxiosInstance from "../style/AxiosInstance";


const GenderServices = {
    storeGender: async (data: any) => {
        return AxiosInstance.post("/storeGender", data)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            throw error;
    
        });
    }
}

export default GenderServices;