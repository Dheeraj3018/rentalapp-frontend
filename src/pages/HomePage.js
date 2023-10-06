import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import { Card, CardMedia } from "@mui/material";

const HomePage = () => {

  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers "}>

      <Card>
        <CardMedia
          component="img"
          height="350"
          image="https://static.businessworld.in/article/article_extra_large_image/1472650880_vcJoIO_rentomojo.jpg"
          alt="green iguana"
        />
      </Card>

      <li>

        <ol><h6>1.The User can rent items from dashboard</h6></ol>
        <ol><strong>2.The price mentioned is for one Day</strong></ol>
        <ol> <strong>3.If you increase the days. The final value will be showed.</strong></ol>
        <ol> <strong>4.The user can buy the required product.</strong></ol>
        <ol> <strong>5.To Change the password ,enter the favourite sport ,password will be changed</strong></ol>
      </li>

    </Layout>
  );
};

export default HomePage; 