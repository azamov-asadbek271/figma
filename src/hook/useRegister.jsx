import { request } from "../services/request";
function useRegister() {
  const handleRegister = (submitData) => {
    request
      .post("/auth/signup", submitData)
      .then((response) => {
        localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken);
      })
      .catch((err) => console.log(err));
  };
   const handleLogin = (submitData) => {
     request
       .post("/auth/signin", submitData)
       .then((response) => {
         console.log(response?.data?.data);
         localStorage.setItem(
           "testUserToken",
           response?.data?.data?.tokens?.accessToken
         );
       })
       .catch((err) => console.log(err));
   };
  return { handleRegister,handleLogin };
}

export default useRegister;
