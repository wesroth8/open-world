import React from "react";
import './tag.css';
import { TagType } from "../../../types/Tag";

export interface TagProps {
    tag: TagType
}

export const Tag = ({
    tag,
    ...props
}: TagProps) => {
    return (
            <span style={tag.style}>{tag.title}</span>
    )
}