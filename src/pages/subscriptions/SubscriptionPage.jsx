import React, { useState } from "react";
import SubscriptionHeader from "../../components/subscriptions/SubscriptionHeader";
import SubscriptionTable from "../../components/subscriptions/SubscriptionTable";

export default function SubscriptionPage() {
  const [search, setSearch] = useState("");
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  return (
    <div>
      <SubscriptionHeader
        search={search}
        setSearch={setSearch}
        refetchTrigger={refetchTrigger}
        setRefetchTrigger={setRefetchTrigger}
      />
      <SubscriptionTable search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
}
