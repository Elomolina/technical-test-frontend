import React from "react";
import { useState } from "react";
type AlertProps = {
  message: string;
  type: "success" | "error" | "info" | "warning";
};
const Alert = ({ message, type }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const getAlertClass = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    isVisible && (
      <div
        className={`p-4 mb-4 rounded-lg ${getAlertClass()} flex justify-between items-center`}
      >
        <span>{message}</span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-lg font-semibold"
        ></button>
      </div>
    )
  );
};

export default Alert;
