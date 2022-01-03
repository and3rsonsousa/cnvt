export default () => (
	<div
		className="flex items-center justify-center h-screen font-light text-center bg-white  text-slate-600"
	>
		<div className="max-w-md">
			<img
				src="./logo.png"
				alt="Agência Canivete"
				className="w-64 mx-auto"
			/>
			<div className="text-xs tracking-wider uppercase">
				<span className="font-medium text-slate-800">
					Agência de Marketing
				</span>{" "}
				especializada em{" "}
				<span className="font-medium text-slate-800">
					Gestão de Marcas
				</span>
			</div>
			<div className="py-8">
				<img
					src="./cade-o-site-que-deveria-estar-aqui.jpg"
					alt="Cadê o site mesmo?"
				/>

				<div className="px-4 mt-8">
					<h3 className="mb-4 text-2xl font-medium text-slate-800">
						Cadê o site que estava aqui?
					</h3>
					Estamos preparando um novo site onde você poderá conhecer
					melhor nosso método de trabalho e como podemos te ajudar a
					alavancar as vendas da sua empresa.
					<br />
					<br />
					Enquanto isso, você pode chamar no WhatsApp e marcar uma
					conversa informal sobre como podemos te ajudar.
				</div>
			</div>
			<div>
				<a
					href="https://wa.me/5588981082050"
					className="inline-block px-8 py-3 text-white transition-colors rounded-full shadow-xl  bg-outrageous shadow-outrageous/50 hover:bg-outrageous-light"
				>
					Vamos marcar um cafezinho? ☕
				</a>
			</div>
		</div>
	</div>
);
