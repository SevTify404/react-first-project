import { Separator } from "@/components/ui/separator.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx";
import { useUserAccount } from "@/hooks/react-queries-hooks/useUserAccount.ts";
import { extractUserInitials } from "@/routing/utils/extractor.ts";
import type { MeResponse } from "@/types/schemas/authSchemas.ts";
import { Badge } from "@/components/ui/badge.tsx";
import DisconnectAlertDialog from "@/components/shared/DisconnectAlertDialog.tsx";
import { Info } from "lucide-react";
import { useMemo, useState } from "react";
import { Spinner } from "@/components/ui/spinner.tsx";
import AnimatedTabs from "@/components/forgeui/AnimatedTabs.tsx";
import { AnimatePresence, motion } from "motion/react";
import type { InfoScope } from "@/types/userInfoTypes.ts";
import { displayedInfo } from "@/data/userInfo.ts";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";

const Tabs = {
    PROFILE: displayedInfo.PROFILE,
    WORK: displayedInfo.WORK,
    BILLING: displayedInfo.BILLING
}

export default function UserInfo() {
    const { user, isLoading } = useUserAccount();

    const [activeTab, setActiveTab] = useState<InfoScope>(Tabs.PROFILE);

    const tabs = useMemo(
        () => Object.values(Tabs).map((tab) => tab.title),
        []
    );

    const handleTabChange = (title: string) => {
        const nextTab = Object.values(Tabs).find((tab) => tab.title === title);
        if (nextTab) {
            setActiveTab(nextTab);
        }
    };

    const userFullname = user ? `${user.firstName} ${user.lastName}` : "";
    const userInitials = extractUserInitials(userFullname);

    if (isLoading || !user) {
        return (
            <div className="flex flex-col items-center justify-center py-8 min-h-75 w-full">
                <Spinner className="size-8 text-primary" />
                {/*<Loader/>*/}
                <span className="text-muted-foreground mt-4 text-sm font-medium">
                    Chargement des informations...
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full flex-1 min-h-0">
            <Avatar size="lg">
                <AvatarImage src={user?.image} alt={userFullname} />
                <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-2xl mt-1">{userFullname}</span>
            <Badge variant="outline" className="my-1">{user?.role?.toUpperCase()}</Badge>
            <span className="text-sm text-muted-foreground mb-1">{user?.email}</span>
            <AnimatedTabs
                tabs={tabs}
                activeTab={activeTab.title}
                onTabChange={handleTabChange}
            />
            <Separator className="my-2" />
            <ScrollArea className="w-full flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="w-full"
                    >
                        <InfoContent activeTab={activeTab} userInfos={user} />
                    </motion.div>
                </AnimatePresence>
                <ScrollBar/>
            </ScrollArea>
            <Separator className="my-2" />
            <DisconnectAlertDialog buttonFullWidth />
        </div>
    )
}


function InfoContent({ userInfos, activeTab }: Readonly<{ activeTab: InfoScope, userInfos: MeResponse }>) {
    if (activeTab.items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground w-full min-h-37.5">
                <Info className="size-8 mb-2 stroke-1" />
                <span className="text-sm font-medium">Aucune information disponible.</span>
            </div>
        );
    }

    return (
        <div className="w-full">
            {activeTab.items.map((scope) => (
                <div key={scope.title} className="my-4">
                    <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-3">
                        {scope.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                        {scope.items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
                                >
                                    {Icon && (
                                        <div
                                            className="flex items-center justify-center size-9 rounded-md bg-primary/10 text-primary shrink-0">
                                            <Icon className="size-4" />
                                        </div>
                                    )}
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-xs text-muted-foreground">
                                            {item.title}
                                        </span>
                                        <span className="text-sm font-medium truncate">
                                            {item.content(userInfos)}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}