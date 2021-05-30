import React from "react";
import PropTypes from "prop-types";

export const UserAlert = ({ user, alertName, textValues, css, dimensions }) => {
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

  return (
    <article className="inline-block">
      <h2 className="prose prose-xl leading-snug text-rac-light-peach">
        {alertName}
      </h2>
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
