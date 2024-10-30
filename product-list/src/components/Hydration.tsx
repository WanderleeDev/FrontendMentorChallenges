"use client";

import { useShoppingCart } from "@/modules/shoppingCart/store";
import { useEffect } from "react";

const Hydration = () => {
  useEffect(() => {
    useShoppingCart.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
