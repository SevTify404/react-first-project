import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/ui/Loader.tsx";

export default function FullPageLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-lg md:gap-5">

                <div className="relative flex items-center justify-center">
                    <Loader/>
                    <Skeleton className="absolute h-8 w-8 rounded-full bg-primary/10 blur-xl animate-pulse" />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-sm font-medium tracking-wide text-foreground">
                        Chargement de l'App
                    </p>
                    <p className="text-xs text-muted-foreground animate-pulse">
                        Authentification en cours...
                    </p>
                </div>

            </div>
        </div>
    );
}