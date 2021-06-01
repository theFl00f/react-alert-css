import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const UserAlert = ({
  hasLink,
  _id: id,
  user,
  alertName,
  textValues,
  css,
  dimensions,
}) => {
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

  const styles = {
    backgroundColor: alertBackgroundColor,
    border: `10px solid ${alertBorderColor}`,
    color: textColor,
    padding:
      alertXPadding == alertYPadding
        ? `${alertYPadding}rem`
        : `${alertYPadding}rem ${alertXPadding}rem`,
  };

  const buttonStyles = {
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

  const buttonLabel = "View code";

  return (
    <article className="inline-block">
      <div className="flex justify-between">
        <h2 className="prose prose-xl leading-snug text-rac-light-peach">
          {alertName}
        </h2>
        {hasLink && (
          <Link
            to={`/alerts/${id}`}
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
      <p className="prose leading-tight text-white">
        Created by <span className="italic font-mono">{user}</span>
      </p>
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

UserAlert.propTypes = {
  hasLink: PropTypes.bool,
  _id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  alertName: PropTypes.string.isRequired,
  textValues: PropTypes.exact({
    message: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
  css: PropTypes.exact({
    alertBorderColor: PropTypes.string.isRequired,
    alertBackgroundColor: PropTypes.string.isRequired,
    buttonBorderColor: PropTypes.string.isRequired,
    buttonBackgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    buttonTextColor: PropTypes.string.isRequired,
  }),
  dimensions: PropTypes.exact({
    alertHeight: PropTypes.number.isRequired,
    alertWidth: PropTypes.number.isRequired,
    alertBorderRadius: PropTypes.number.isRequired,
    alertBorderWidth: PropTypes.number.isRequired,
    alertXPadding: PropTypes.number.isRequired,
    alertYPadding: PropTypes.number.isRequired,
    buttonXPadding: PropTypes.number.isRequired,
    buttonYPadding: PropTypes.number.isRequired,
    buttonBorderRadius: PropTypes.number.isRequired,
    buttonBorderWidth: PropTypes.number.isRequired,
  }),
};
