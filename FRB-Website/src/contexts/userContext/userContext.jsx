// eslint-disable-next-line react/prop-types
import { createContext, useState, useEffect } from "react";
import { notifyErrorLogin, notifySucessLogin } from "../../Toastfy";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [CompanyModal, setCompanyModal] = useState(false);
  const [ClientModal, setClientModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleForm = async (body) => {
    console.log(body);
    try {
      const response = await api.post("users/login", body);

      window.localStorage.clear();
      window.localStorage.setItem(
        "@token",
        JSON.stringify(response.data.accessToken)
      );
      notifySucessLogin();
      setLoading(true);
      navigate("COLOCAR O CAMINHO CERTO");
    } catch (err) {
      console.log(err);
      notifyErrorLogin();
    }
  };

  // useEffect(() => {
  //   async function loadUser() {
  //     const token = JSON.parse(localStorage.getItem("@token"));

  //     if (!token) {
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const { data } = await api.get("COLOCAR O CAMINHO CERTO", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadUser();
  // }, [navigate]);

  return (
    <UserContext.Provider
      value={{
        handleForm,
        loading,
        setLoading,
        user,
        setUser,
        CompanyModal,
        setCompanyModal,
        ClientModal,
        setClientModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
