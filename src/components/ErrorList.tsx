import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectError } from "../features/errors/errorsSlice";

const ErrorList: React.FC = () => {
  const errors = useAppSelector((s) => s.errors.errors);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="font-semibold mb-2">Общие замечания по документу</h3>
      <ol className="list-decimal ml-5 space-y-1">
        {errors.map((err) => (
          <li
            key={err.id}
            className="cursor-pointer hover:text-purple-600"
            onClick={() => dispatch(selectError(err.id))}
          >
            {err.message}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ErrorList;
