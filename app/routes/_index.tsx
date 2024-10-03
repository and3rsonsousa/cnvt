import type { MetaFunction } from "@remix-run/node";
import { DotPattern } from "~/components/dotpattern";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
	return [
		{ title: "Agência CNVT" },
		{
			name: "description",
			content:
				"Agência de Marketing 360 onde parceria e resultados estão sempre afiados.",
		},
	];
};

export default function Index() {
	return (
		<div className="bg-[#010203] antialiased font-light text-white overflow-hidden h-screen w-screen flex flex-col justify-center">
			<DotPattern
				width={15}
				height={15}
				className={cn(
					"[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]"
				)}
			/>
			<div className="text-center mx-auto max-w-96">
				<svg
					clipRule="evenodd"
					fillRule="evenodd"
					strokeLinejoin="round"
					strokeMiterlimit="2"
					viewBox="0 0 4252 4252"
					className="w-24 mx-auto"
				>
					<g transform="translate(-1379.8 -6145.7)">
						<g transform="matrix(11.466 0 0 11.466 -17337 -75255)">
							<path
								d="m1808.8 7470.1h-67.81l-108.62-108.61v-153.61l108.62-108.61h67.81v63.29l-151.68 113.14v17.97h38.55l113.13 176.43zm17.97-370.83h67.82l108.61 108.61v153.61l-108.61 108.61h-67.82v-63.29l151.69-113.14v-17.97h-38.55l-113.14-176.43z"
								fill="#fff"
							/>
						</g>
					</g>
				</svg>
				<div className="mt-12">
					<div className="mb-4">
						Que tal começar uma conversa sobre como reposicionar sua
						marca com estratégias de marketing realmente eficazes?
					</div>
					<a
						href="https://form.respondi.app/tAaiKV53"
						className="bg-white text-black px-8 py-5 rounded-2xl font-medium inline-block hover:opacity-90"
					>
						Primeiro Contato
					</a>
				</div>
			</div>
		</div>
	);
}
