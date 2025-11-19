"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const router = useRouter();
	const [trackNumber, setTrackNumber] = useState("");

	const handleTrackNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTrackNumber(e.target.value);
	};

	const handleTrackNumberSubmit = () => {
		if (trackNumber === "11112030") {
			router.push(`/order/${trackNumber}`);
		} else {
			alert("Lütfen geçerli bir takip numarası giriniz");
			setTrackNumber("");
		}
	};

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
			<h1 className="text-sm md:text-base lg:text-lg font-bold mb-4 text-center">
				Sipariş Takibi için Lütfen Aşağıdaki Alana Takip Numaranızı Giriniz.
			</h1>
			<input
				type="number"
				placeholder="Takip Numarasını Giriniz"
				className="border-2 border-gray-300 rounded-md p-2 w-full max-w-md"
				value={trackNumber}
				onChange={handleTrackNumberChange}
				pattern="^[0-9]{8}$"
				title="8 haneli bir takip numarası giriniz"
				required
			/>
			<button
				className="bg-blue-500 text-white rounded-md px-4 py-2 max-w-md mt-4"
				onClick={handleTrackNumberSubmit}
			>
				Siparişi Görüntüle
			</button>
		</div>
	);
}
