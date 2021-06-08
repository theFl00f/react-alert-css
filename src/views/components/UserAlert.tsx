import React, { CSSProperties, FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface Props {
  showTitle?: boolean;
  hasLink?: boolean;
  alert: DBAlertWithId | DBAlert;
}

export const UserAlert: FC<Props> = ({ showTitle, hasLink, alert }) => {
  const { user, alertName, textValues, css, dimensions } = alert;
  const { message, button } = textValues;
  const {
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
  } = css;

  const {
    alertHeight,
    alertWidth,
    alertBorderRadius,
    alertBorderWidth,
    alertXPadding,
    alertYPadding,
    buttonYPadding,
    buttonXPadding,
    buttonBorderWidth,
    buttonBorderRadius,
  } = dimensions;

  const buttonLabel = "View code";

  const [alertId, setAlertId] = useState<string>();

  const styles: CSSProperties = {
    backgroundColor: alertBackgroundColor,
    border: `10px solid ${alertBorderColor}`,
    color: textColor,
    padding:
      alertXPadding == alertYPadding
        ? `${alertYPadding}rem`
        : `${alertYPadding}rem ${alertXPadding}rem`,
  };

  const buttonStyles: CSSProperties = {
    backgroundColor: buttonBackgroundColor,
    border: `${buttonBorderWidth}rem solid ${buttonBorderColor}`,
    borderRadius: `${buttonBorderRadius}rem`,
    color: buttonTextColor,
  };

  styles.width = `${alertWidth}rem`;
  styles.height = `${alertHeight}rem`;
  styles.borderRadius = `${alertBorderRadius}rem`;
  styles.borderWidth = `${alertBorderWidth}rem`;

  if (buttonXPadding == 15) {
    buttonStyles.padding = `${buttonYPadding}rem 0`;
    buttonStyles.width = "100%";
  } else {
    buttonStyles.padding = `${buttonYPadding}rem ${buttonXPadding}rem`;
  }
  useEffect(() => {
    if ("_id" in alert) {
      setAlertId(alert._id);
    }
  }, [alert]);

  return (
    <article className="inline-block">
      <div className="flex justify-between">
        {showTitle && (
          <h2 className="prose prose-xl leading-snug text-rac-light-peach">
            {alertName}
          </h2>
        )}

        {hasLink && alertId && (
          <Link
            to={`/alerts/${alertId}`}
            className="p-1 text-rac-light-peach hover:text-rac-peach border-b-2 border-transparent focus:border-rac-light-peach transition-colors"
          >
            <FontAwesomeIcon
              icon={faCode}
              aria-hidden={true}
              title={buttonLabel}
            />
            <span className="sr-only">{buttonLabel}</span>
          </Link>
        )}
      </div>
      {showTitle && (
        <p className="prose leading-tight text-white">
          Created by <span className="italic font-mono">{user}</span>
        </p>
      )}

      <div className="flex flex-col items-center mt-1" style={styles}>
        {message && <p>{message}</p>}
        <button
          className="cursor-default mt-auto"
          disabled
          aria-disabled="true"
          style={buttonStyles}
        >
          {button}
        </button>
      </div>
    </article>
  );
};
