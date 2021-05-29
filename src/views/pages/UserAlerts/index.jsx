import React, { useEffect, useState } from "react";
import { alertDao } from "../../../context/persistentContext";
import { UserAlert } from "../../components/UserAlert";
import { Wrapper } from "../../components/Wrapper";

const UserAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  const getAlerts = async () => {
    const response = await alertDao.getAlerts();
    setAlerts(response.data.result);
  };

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <div className="bg-rac-purple py-10">
      <Wrapper>
        <section className="flex flex-wrap gap-x-8 gap-y-6 justify-evenly">
          {alerts.map((alert) => (
            <UserAlert key={alert._id} {...alert} />
          ))}
        </section>
      </Wrapper>
    </div>
  );
};

export default UserAlerts;
