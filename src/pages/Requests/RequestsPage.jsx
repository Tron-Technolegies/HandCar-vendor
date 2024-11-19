import React from "react";
import RequestHeader from "../../components/requests/RequestHeader";
import RequestTable from "../../components/requests/RequestTable";

export default function RequestsPage() {
  return (
    <div>
      <RequestHeader />
      <RequestTable />
    </div>
  );
}
