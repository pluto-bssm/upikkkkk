"use client";

import client from "./libs/apolloClient";
import { ApolloProvider } from "@apollo/client/react"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </QueryClientProvider>
    );
}
