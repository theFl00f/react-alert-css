import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
import { Link } from "react-router-dom";
import { NotFound } from "../../components/NotFound";

export const Alert = ({ match }) => {
  const [alert, setAlert] = useState();
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

  const input = alert
    ? {
        alertName: alert.alertName,
        ...alert.css,
        ...alert.dimensions,
        buttonText: alert.textValues.button,
        message: alert.textValues.message,
        user: alert.user,
      }
    : undefined;

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
          {alert && <UserAlert {...alert} />}
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

Alert.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: {
      id: PropTypes.string,
    },
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
