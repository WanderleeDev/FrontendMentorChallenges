"use client";

import * as React from "react";
import { useShoppingCart } from "@/modules/shoppingCart/store";

const Hydration = () => {
  React.useEffect(() => {
    useShoppingCart.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
