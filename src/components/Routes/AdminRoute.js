import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  console.log('Inside :::', ok, auth)

  useEffect(() => {
    const authCheck = async () => {
      console.log('Useefeect', auth?.token)
      const res = await axios.get('/admin-auth');
      console.log('res :::', res)
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    }
    if (auth?.token) authCheck();
  }, [auth?.token])
  return ok ? <Outlet /> : <Spinner path="login" />;
}