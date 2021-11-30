import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import NoFound from "./pages/NoFound";
import Academy from "./pages/Academy";
import Profil from "./pages/Profil";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

export default function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <div>
      <UidContext.Provider value={uid}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/communaute" exact component={Membership} />
            <Route path="/academie" exact component={Academy} />
            <Route path="/profil" exact component={Profil} />
            <Route component={NoFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </UidContext.Provider>
    </div>
  );
}
