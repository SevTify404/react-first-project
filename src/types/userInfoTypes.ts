import type {MeResponse} from "@/types/schemas/authSchemas.ts";
import type {LucideIcon} from "lucide-react";

interface Section {
    title: string;
    items: ScalarInfo[];
}

export interface InfoScope {
    title: string;
    items: Section[];
}

interface ScalarInfo {
    title: string;
    content: (userInfos: MeResponse) => string;
    icon?: LucideIcon
}