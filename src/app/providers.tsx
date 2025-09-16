"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "css", prepend: true });

export default function Providers({ children }: { children: ReactNode }) {
    const [client] = useState(() => new QueryClient());

    return (
        <CacheProvider value={cache}>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
        </CacheProvider>
    );
}

