import React, { FC, useEffect, useState } from "react";
import { alertDao } from "../../../context/persistentContext";
import { timeout } from "../../../util/timeout";
import { Loader } from "../../components/Loader";
import { NotFound } from "../../components/NotFound";
import { UserAlert } from "../../components/UserAlert";
import { Wrapper } from "../../components/Wrapper";

const UserAlerts: FC = () => {
  const [alerts, setAlerts] = useState<DBAlertWithId[]>([]);
  const [loading, setLoading] = useState(false);

  const getAlerts = async () => {
    setLoading(true);
    try {
      const [response] = await Promise.all([
        alertDao.getAlerts(),
        timeout(1000),
      ]);
      setAlerts(response.data.result);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!alerts.length) getAlerts();
  }, []);

  return (
    <div className="bg-rac-purple pb-10">
      <Wrapper>
        <div className="w-full flex justify-center items-center pt-4 pb-2">
          {loading && <Loader />}
        </div>
        {!loading && !alerts.length && <NotFound item="alerts" />}
        <section className="flex flex-wrap gap-x-8 gap-y-6 justify-evenly">
          {alerts &&
            alerts.map((alert) => (
              <UserAlert key={alert._id} alert={alert} hasLink showTitle />
            ))}
        </section>
      </Wrapper>
    </div>
  );
};

export default UserAlerts;
