import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { KeepAliveProvider } from "@/components/react-next-keep-alive";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <KeepAliveProvider router={router}>
            <Component {...pageProps} />
        </KeepAliveProvider>
    );
}
