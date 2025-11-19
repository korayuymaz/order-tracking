"use client";
import { redirect, useParams } from "next/navigation";

const Order = () => {
	const searchParams = useParams();
	const trackingNumber = searchParams["tracking-number"];

	if (!trackingNumber) {
		return redirect("/");
	}

	return redirect(`/order/${trackingNumber}`);
};

export default Order;
