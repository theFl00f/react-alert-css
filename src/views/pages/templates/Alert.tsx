import React, { FC, useEffect, useState } from "react";
import { alertDao } from "../../../context/persistentContext";
import { timeout } from "../../../util/timeout";
import { UserAlert } from "../../components/UserAlert";
import { Wrapper } from "../../components/Wrapper";
import { Loader } from "../../components/Loader";
import { ExportedCodeBlock } from "../../components/ExportedCodeBlock";
import {
  generateCSS,
  generateHTML,
} from "../../components/ExportedCodeBlock/codeBlockUtil";
import { Link, RouteComponentProps } from "react-router-dom";
import { NotFound } from "../../components/NotFound";
import { alertToState } from "../../../util/alertFormat";

interface MatchParams {
  id: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

export const Alert: FC<MatchProps> = ({ match }: MatchProps) => {
  const [alert, setAlert] = useState<DBAlert>();
  const [loading, setLoading] = useState(false);

  const getAlerts = async () => {
    setLoading(true);
    try {
      const [response] = await Promise.all([
        alertDao.getAlert(match.params.id),
        timeout(1000),
      ]);
      setAlert(response.data.result);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!alert) getAlerts();
  }, []);

  const input = alert && alertToState(alert);

  return (
    <Wrapper>
      <Link
        className="prose text-rac-green hover:text-rac-blue focus:text-rac-blue  underline"
        to={`/alerts`}
      >
        Back
      </Link>
      <div className="flex flex-col gap-4">
        <div
          style={{ minHeight: 250 }}
          className="flex justify-center items-center bg-rac-purple py-2 rounded"
        >
          {loading && <Loader />}
          {alert && <UserAlert alert={alert} showTitle />}
          {!loading && !alert && <NotFound item="alert" />}
        </div>
        {input && (
          <div className="bg-white px-4 rounded md:grid md:grid-cols-2 md:gap-2">
            <ExportedCodeBlock
              title="HTML"
              highlightingClass="language-html"
              code={generateHTML(input)}
            />
            <ExportedCodeBlock
              title="CSS"
              highlightingClass="language-css"
              code={generateCSS(input)}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
};
