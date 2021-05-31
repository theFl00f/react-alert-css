import React, { useEffect, useState } from "react";
import { alertDao } from "../../../context/persistentContext";
import { Loader } from "../../components/Loader";
import { UserAlert } from "../../components/UserAlert";
import { Wrapper } from "../../components/Wrapper";

const UserAlerts = () => {
  const [alerts, setAlerts] = useState();
  const [loading, setLoading] = useState(false);

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const getAlerts = async () => {
    setLoading(true);
    const [response] = await Promise.all([alertDao.getAlerts(), timeout(2000)]);
    setAlerts(response.data.result);
    setLoading(false);
  };

  useEffect(() => {
    if (!alerts) getAlerts();
  }, []);

  return (
    <div className="bg-rac-purple pb-10">
      <Wrapper>
        <div className="w-full flex justify-center items-center h-10">
          {loading && <Loader />}
        </div>

        <section className="flex flex-wrap gap-x-8 gap-y-6 justify-evenly">
          {alerts &&
            alerts.map((alert) => <UserAlert key={alert._id} {...alert} />)}
        </section>
      </Wrapper>
    </div>
  );
};

export default UserAlerts;
