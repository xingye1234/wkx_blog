import React from "react";
import { fetchUsers } from "../lib/action";

export default async function page() {
  // const users = await fetchUsers()
  return (
    <div className="animate-fade-left animate-duration-1000 animate-delay-500">
      dashboard
    </div>
  );
}
