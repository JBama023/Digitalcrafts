import React, { useState, useMemo } from "react";
import "./SignUpStyles.css";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state);
  const debouncedChangeHandler = useMemo(() => {
    return debounce(dispatch, 300);
  }, [dispatch]);

  return (
    <div className="signupform">
      <form>
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_FIRSTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="FirstName"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_LASTNAME",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_EMAIL",
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            debouncedChangeHandler({
              type: "SIGNUPFORM_PASSWORD",
              payload: e.target.value,
            })
          }
          type="password"
          placeholder="Password"
        />
        {loading ? (
          <button>
            <FaSpinner className="icon" />
          </button>
        ) : (
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Loading" : "Submit"}
            onClick={(e) => createUserFromLogin(e, user, setLoading)}
          />
        )}
      </form>
    </div>
  );
}
