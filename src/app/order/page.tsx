"use client";
import { redirect, useSearchParams } from "next/navigation";

const Order = () => {
	const searchParams = useSearchParams();
	const trackingNumber = searchParams.get("tracking-number");

	if (!trackingNumber) {
		return redirect("/");
	}

	return redirect(`/order/${trackingNumber}`);
};

export default Order;
