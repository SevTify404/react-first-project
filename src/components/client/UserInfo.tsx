import AnimatedTabs from "@/components/forgeui/AnimatedTabs.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useUserAccount} from "@/hooks/react-queries-hooks/useUserAccount.ts";
import {extractUserInitials} from "@/routing/utils/extractor.ts";
import type {MeResponse} from "@/types/schemas/authSchemas.ts";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card.tsx";

export default function UserInfo() {
    const {user} = useUserAccount();

    const userFullname = `${user?.firstName} ${user?.lastName}`;
    const userInitials = extractUserInitials(userFullname);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Avatar size="lg">
                <AvatarImage src={user?.image} alt={userFullname}/>
                <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-2xl mt-1">{userFullname}</span>
            <span className="text-sm text-muted-foreground mb-1">{user?.email}</span>
            <AnimatedTabs tabs={["Profile", "Work", "Billing"]}/>
            <Separator className="my-2"/>
            <ProfileInfo userInfos={user as MeResponse}/>
        </div>
    )
}

const profilInfoCards = [
    {
        title: "Nom Complet",
        content: (userInfos: MeResponse) => `${userInfos.firstName} ${userInfos.lastName}`
    },
    {
        title: "Email",
        content: (userInfos: MeResponse) => userInfos.email
    },
    {
        title: "Rôle",
        content: (userInfos: MeResponse) => userInfos.role
    },
    {
        title: "Genre",
        content: (userInfos: MeResponse) => userInfos.gender
    }
]
function ProfileInfo({userInfos} : Readonly<{ userInfos: MeResponse }>) {
    return (
        <div className="grid grid-cols-2 gap-3 items-center justify-center w-full">
            {profilInfoCards.map((card) => (
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
    )
}