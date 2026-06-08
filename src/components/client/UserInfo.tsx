import AnimatedTabs from "@/components/forgeui/AnimatedTabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useUserAccount} from "@/hooks/react-queries-hooks/useUserAccount.ts";
import {extractUserInitials} from "@/routing/utils/extractor.ts";
import type {MeResponse} from "@/types/schemas/authSchemas.ts";
import {Card, CardContent, CardHeader,} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import DisconnectAlertDialog from "@/components/shared/DisconnectAlertDialog.tsx";
import {Briefcase, Building, Building2, House, Info, type LucideIcon, Mail, Phone} from "lucide-react";
import {useMemo, useState} from "react";

const infos = {
    PROFILE: {
        title: "Profile",
        items: [
            {
                title: "Informations Personnelles",
                items: [
                    {
                        title: "Nom Complet",
                        content: (userInfos: MeResponse) => `${userInfos?.firstName} ${userInfos?.lastName}`,
                        icon: Info
                    },
                    {
                        title: "Nom d'utilisateir",
                        content: (userInfos: MeResponse) => userInfos?.username || "Non renseigné",
                        icon: Info
                    }
                ]
            },
            {
                title: "Contacts Détails",
                items: [
                    {
                        title: "Email",
                        content: (userInfos: MeResponse) => userInfos?.email,
                        icon: Mail
                    },
                    {
                        title: "Numéro de téléphone",
                        content: (userInfos: MeResponse) => userInfos?.phone || "Non renseigné",
                        icon: Phone
                    }
                ]
            }
        ]
    },
    WORK: {
        title: "Work",
        items: [
            {
                title: "Infos Travail",
                items: [
                    {
                        title: "Poste",
                        icon: Briefcase,
                        content: (userInfos) => "Non renseigné"
                    },
                    {
                        title: "Département",
                        icon: Building,
                        content: () => 'Non renseigné'
                    },
                ]
            },
            {
                title: "Localisation",
                items: [
                    {
                        title: "Ville",
                        content: () => "Non renseigné",
                        icon: Building2
                    },
                    {
                        title: "Adresse",
                        content: () => "Non renseigné",
                        icon: House
                    },
                    {
                        title: "Etat",
                        content: () => "Non renseigné",
                        icon: House
                    }
                ]
            }
        ]
    },
    BILLING: {
        title: "Billing",
        items: []
    }
}

const Tabs = {
    PROFILE: infos.PROFILE,
    WORK: infos.WORK,
    BILLING: infos.BILLING
}

export default function UserInfo() {
    const {user} = useUserAccount();

    const [activeTab, setActiveTab] = useState<InfoScope>(Tabs.PROFILE);
    const tabs = useMemo(() => Object.values(Tabs).map((tab) => tab.title), []);
    const userFullname = `${user?.firstName} ${user?.lastName}`;
    const userInitials = extractUserInitials(userFullname);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Avatar size="lg">
                <AvatarImage src={user?.image} alt={userFullname}/>
                <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-2xl mt-1">{userFullname}</span>
            <Badge variant="outline" className="my-1">{user?.role.toUpperCase()}</Badge>
            <span className="text-sm text-muted-foreground mb-1">{user?.email}</span>
            <AnimatedTabs tabs={tabs}/>
            <Separator className="my-2"/>
            <InfoContent activeTab={activeTab} userInfos={user as MeResponse}/>
            <Separator className="my-2"/>
            <DisconnectAlertDialog buttonFullWidth/>
        </div>
    )
}

interface Section {
    title: string;
    items: ScalarInfo[];
}

interface InfoScope {
    title: string;
    items: Section[];
}

interface ScalarInfo {
    title: string;
    content: (userInfos: MeResponse) => string;
    icon?: LucideIcon
}


function InfoContent({userInfos, activeTab}: Readonly<{ activeTab: InfoScope, userInfos: MeResponse }>) {
    return (
        <div>
            {activeTab.items.map((scope) => (
                <div key={scope.title} className="my-4">
                    <h3 className="text-muted-foreground">{scope.title.toUpperCase()}</h3>
                    <div className="grid grid-cols-2 gap-3 items-center justify-center my-2 w-full">
                        {scope.items.map((card) => (
                            <Card key={card.title} className="w-full">
                                <CardHeader className="font-medium text-muted-foreground">
                                    {card.title}
                                </CardHeader>
                                <CardContent className="text-lg overflow-hidden text-ellipsis">
                                    {card.content(userInfos)}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}