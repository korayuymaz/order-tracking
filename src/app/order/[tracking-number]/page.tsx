"use client";
import ProgressSteps from "@/components/progress-steps";
import { useParams } from "next/navigation";
import orders from "@/data/orders";
import Image from "next/image";

const TrackingNumber = () => {
	const params = useParams();
	const trackingNumber = params["tracking-number"];
	const order = orders.find((order) => order.trackingNumber === trackingNumber);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen relative">
			<h1 className="text-2xl font-bold mb-4 text-center">
				Sipariş Takip Numarası: {trackingNumber}
			</h1>
			<ProgressSteps completedSteps={order?.status || 0} />
			<Image
				src={order?.image || ""}
				alt="Order Image"
				width={500}
				height={500}
				className="mb-4 rounded-lg object-cover absolute top-0 left-0 opacity-50 z-[-1]"
			/>
		</div>
	);
};

export default TrackingNumber;
