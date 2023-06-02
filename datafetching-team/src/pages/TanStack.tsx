import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import ReadData from "./ReadData"

const TanStack = () => {
    const client = new QueryClient()


    return (
        <div>
            <QueryClientProvider client={client} >
                <ReadData />
            </QueryClientProvider>
        </div>
    )
}

export default TanStack