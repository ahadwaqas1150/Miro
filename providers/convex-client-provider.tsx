"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated,ConvexReactClient} from "convex/react";
import { Loading } from "@/components/auth/Loading";

interface ConvexClientProviderProp {
    children: React.ReactNode
}
const convexurl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const conex = new ConvexReactClient(convexurl)
export const ConvexClientProvider = ({
    children 
    }: ConvexClientProviderProp) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={conex} useAuth={useAuth}>
                <Authenticated>
                        {children}
                </Authenticated>
                <AuthLoading>
                   <Loading/>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}