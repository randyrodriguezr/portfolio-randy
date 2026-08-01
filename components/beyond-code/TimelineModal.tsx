"use client";

import { Timeline } from "@/types/Timeline";

interface TimelineModalProps {

    open: boolean;

    item: Timeline | null;

    onClose: () => void;

}

export default function TimelineModal({

    open,

    item,

    onClose,

}: TimelineModalProps) {

    if (!open || !item) return null;

    return (

        <div>

            {/* Aquí irá el modal */}

            <h1>{item.title}</h1>

        </div>

    );

}