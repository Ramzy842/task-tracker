const AuthLayout = ({ children }) => {
	return (
		<div className="grid grid-rows-[auto_1fr] h-screen">
			<div className="bg-[#144B4B] w-full flex justify-center items-center">
				<p className="font-radCan text-[#E3EAE9] text-3xl font-bold uppercase">
					TaskNexus
				</p>
			</div>
			<div className="bg-[#E3EAE9] flex justify-center flex-col items-center w-full">{children}</div>
		</div>
	);
};

export default AuthLayout;
