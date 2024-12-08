import {BlockEnum, options} from "./typing";
import {ComponentType} from 'react'
import {
    StartNode,
    EndNode,
    LLMNode,
    KnowledgeNode,
    ConditionsNode,
    IntentNode,
    APINode
} from '@/app/components/Workflow/components/Nodes';


export const NodeComponentMap: Record<string, ComponentType<unknown>> = {
    [BlockEnum.Start]: StartNode,
    [BlockEnum.End]: EndNode,
    [BlockEnum.Intent]: IntentNode,
    [BlockEnum.LLM]: LLMNode,
    [BlockEnum.Knowledge]: KnowledgeNode,
    [BlockEnum.API]: APINode,
    [BlockEnum.Conditions]: ConditionsNode,
    // [BlockEnum.Code]: CodeNode,
    // [BlockEnum.TemplateTransform]: TemplateTransformNode,
    // [BlockEnum.HttpRequest]: HttpNode,
    // [BlockEnum.Tool]: ToolNode,
    // [BlockEnum.VariableAssigner]: VariableAssignerNode,
}

export const themeoptions: options[] = [
    {label: '系统', value: 'system'},
    {label: '浅色', value: 'light'},
    {label: '深色', value: 'dark'},
]


export enum Path {
    WorkFlow = '/work_flow',
    Home = '/home',

}
