export interface Tema {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    color?: string;
    icon?: string;
    isActive?: boolean;
    isCompleted?: boolean;
    isLocked?: boolean;
    isFavorite?: boolean;
    isHidden?: boolean;
    isArchived?: boolean;
    cards: Card[];
}

export interface Card {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    color?: string;
    icon?: string;
    isActive?: boolean;
    isCompleted?: boolean;
    isLocked?: boolean;
    isFavorite?: boolean;
    isHidden?: boolean;
    isArchived?: boolean;
}