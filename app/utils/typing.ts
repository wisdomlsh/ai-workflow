import React from "react";

export enum BlockEnum {
    Start = 'start',
    End = 'end',
    Intent = 'intention',
    LLM = 'llm',
    Knowledge = 'knowledge',
    API = 'api',
    Conditions = 'conditions',
    Code = 'code',
    TemplateTransform = 'template-transform',
    HttpRequest = 'http-request',
    VariableAssigner = 'variable-assigner',
    Tool = 'tool',
}

export interface NodeMeta {
    description: string,
    icon: React.ReactNode,
    subTitle: string,
    title: string,
    nodeType: BlockEnum
}


export interface NodeData {
    nodeMeta: NodeMeta,
    id: string,
    _selected: boolean
}

interface OutputType {
    description: string,
    name: string,
    required: boolean
    type: string
}

export interface NodePropsType {
    nodeMeta: NodeMeta,
    outputs: OutputType[]

}

export type options = { label: string, value: string }

export enum Theme {
    Light = 'light',
    Dark = 'dark',
    System = 'system',
}

