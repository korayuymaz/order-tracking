const ProgressSteps = ({ completedSteps }: { completedSteps: number }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<span
					className={`h-2 rounded-full border-2 border-gray-300 w-6 ${
						completedSteps >= 1 ? "bg-blue-500" : "bg-gray-300"
					}`}
				></span>
				<span className="text-sm">Sipariş Oluşturuldu</span>
			</div>
			<div className="flex items-center gap-2">
				<span
					className={`h-2 rounded-full border-2 border-gray-300 w-6 ${
						completedSteps >= 2 ? "bg-blue-500" : "bg-gray-300"
					}`}
				></span>
				<span className="text-sm">Hazırlanıyor</span>
			</div>
			<div className="flex items-center gap-2">
				<span
					className={`h-2 rounded-full border-2 border-gray-300 w-6 ${
						completedSteps >= 3 ? "bg-blue-500" : "bg-gray-300"
					}`}
				></span>
				<span className="text-sm">Teslimat Süreci Başladı</span>
			</div>
			<div className="flex items-center gap-2">
				<span
					className={`h-2 rounded-full border-2 border-gray-300 w-6 ${
						completedSteps >= 4 ? "bg-blue-500" : "bg-gray-300"
					}`}
				></span>
				<span className="text-sm">Teslimat Tamamlandı</span>
			</div>
		</div>
	);
};

export default ProgressSteps;
