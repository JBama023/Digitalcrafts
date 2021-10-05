import React, { useState } from "react";
import {} from "../styledComponents/FormStyle";
export default function Form() {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <form>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          name="email"
          value={formData?.email}
        />
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
