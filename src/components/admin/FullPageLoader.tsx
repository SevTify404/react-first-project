import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-lg md:gap-5">

                <div className="relative flex items-center justify-center">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                    <Skeleton className="absolute h-8 w-8 rounded-full bg-primary/10 blur-xl animate-pulse" />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-sm font-medium tracking-wide text-foreground">
                        Authentification en cours
                    </p>
                    <p className="text-xs text-muted-foreground animate-pulse">
                        Cahrgement de l'App...
                    </p>
                </div>

            </div>
        </div>
    );
}