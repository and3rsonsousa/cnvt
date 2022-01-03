export default () => (
	<div
		className="
				flex
				h-screen
				items-center
				justify-center
				bg-white 
				text-slate-600
				font-light
				text-center
			"
	>
		<div className="max-w-md">
			<img
				src="./logo.png"
				alt="Agência Canivete"
				className="w-64 mx-auto"
			/>
			<div className="text-xs uppercase tracking-wider">
				<span className="font-medium text-slate-800">
					Agência de Marketing
				</span>
				com foco em
				<span className="font-medium text-slate-800">
					Gestão de Marcas
				</span>
			</div>
			<div className="py-8">
				<img
					src="./cade-o-site-que-deveria-estar-aqui.jpg"
					alt="Cadê o site mesmo?"
				/>

				<div className="mt-8 px-4">
					<h3 className="font-medium text-2xl mb-4 text-slate-800">
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
					className="
							inline-block
							py-3
							px-8
							bg-outrageous
							text-white
							rounded-full
							shadow-xl shadow-outrageous/50
							hover:bg-outrageous-light
							transition-colors
						"
				>
					Vamos marcar um cafezinho? ☕
				</a>
			</div>
		</div>
	</div>
);
