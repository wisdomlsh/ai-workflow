import {BlockEnum} from "./typing";
import type { ComponentType } from 'react'
import {StartNode, EndNode, LLMNode} from '@/app/components/Workflow/components/Nodes';


export const NodeComponentMap: Record<string, ComponentType<unknown>> = {
    [BlockEnum.Start]: StartNode,
    [BlockEnum.End]: EndNode,
    // [BlockEnum.Answer]: AnswerNode,
    [BlockEnum.LLM]: LLMNode,
    // [BlockEnum.KnowledgeRetrieval]: KnowledgeRetrievalNode,
    // [BlockEnum.QuestionClassifier]: QuestionClassifierNode,
    // [BlockEnum.IfElse]: IfElseNode,
    // [BlockEnum.Code]: CodeNode,
    // [BlockEnum.TemplateTransform]: TemplateTransformNode,
    // [BlockEnum.HttpRequest]: HttpNode,
    // [BlockEnum.Tool]: ToolNode,
    // [BlockEnum.VariableAssigner]: VariableAssignerNode,
}
