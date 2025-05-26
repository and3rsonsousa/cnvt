import { redirect } from "@remix-run/react";

export const loader = async () => {
    return redirect("https://form.respondi.app/vJrkIfgm");
}

export default function IdentidadeVisual() {
    return (
        <div className="grid place-content-center text-center min-h-screen px-4 py-8 bg-black text-white">
            <h1 className="text-3xl font-bold mb-4">Estamos redirecionando você <br /> para o nosso formulário</h1>

            <div className=" font-bold tracking-wider">
                CNVT
            </div>

        </div>
    );
}