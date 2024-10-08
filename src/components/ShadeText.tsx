import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShadeText = ({ features }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
		}, 3000);

		return () => clearInterval(interval); // Cleanup on unmount
	}, [features.length]);

	const textVariants = {
		initial: { opacity: 0, y: 10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 },
	};

	return (
		<div className="flex justify-start items-start">
			<div className="relative w-full max-w-md h-20 overflow-hidden">
				{" "}
				{/* Fixed height */}
				<AnimatePresence>
					{features.map((feature, index) =>
						index === currentIndex ? (
							<motion.div
								key={index}
								variants={textVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.6 }} // Transition duration
								className="bg-white shadow-md p-4 rounded-lg absolute w-full h-full flex items-start justify-center"
							>
								<h2 className="text-center font-semibold text-lg ">
									{feature}
								</h2>
							</motion.div>
						) : null
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ShadeText;
