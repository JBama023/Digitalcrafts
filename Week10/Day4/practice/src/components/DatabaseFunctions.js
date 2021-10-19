import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://mxakcphctxajogkuteth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function createUserFromLogin(e, userData, setLoading) {
  e.preventDefault();
  setLoading(true);
  await sleep(2000);
  try {
    const { data, error } = await supabase
      .from("reduxUserRegister")
      .insert([userData]);
    if (data) {
      setLoading(false);
      // dispatch your toastify message
    } else {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }
}