import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Prism from "prismjs";
import "./prism.css";

interface Props {
  title: string;
  code: string;
  highlightingClass: "language-css" | "language-html";
}

export const ExportedCodeBlock: FC<Props> = ({
  title,
  code,
  highlightingClass,
}) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (e) {
      console.log({ e });
    }
  };

  const getCopiedClasses = () => {
    let copiedClasses = "transition-opacity rac-transition ";
    copied
      ? (copiedClasses += "opacity-100 visible")
      : (copiedClasses += "opacity-0 invisible");
    return copiedClasses;
  };

  const getButtonClasses = () => {
    let buttonClasses =
      "text-base px-2 hover:text-rac-light-purple transition-colors rac-transition ";
    copied
      ? (buttonClasses += "text-rac-light-purple")
      : (buttonClasses += "text-rac-purple");
    return buttonClasses;
  };

  const buttonLabel = `Copy ${title} to clipboard`;

  return (
    <article className="flex flex-col">
      <span className="prose prose-sm flex items-baseline gap-2">
        <h2>{title}</h2>
        <button onClick={copyToClipboard} className={getButtonClasses()}>
          <FontAwesomeIcon
            aria-hidden={true}
            title={`${buttonLabel}${copied ? "- Copied" : ""}`}
            icon={copied ? faClipboardCheck : faClipboard}
          />
          <span className="sr-only">{buttonLabel}</span>
        </button>
        <p className={getCopiedClasses()}>Copied!</p>
      </span>
      <pre>
        <code className={highlightingClass || ""}>{code}</code>
      </pre>
    </article>
  );
};
