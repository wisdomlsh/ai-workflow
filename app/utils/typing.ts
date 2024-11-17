import React from "react";

export enum BlockEnum {
    Start = 'start',
    End = 'end',
    Answer = 'answer',
    LLM = 'llm',
    KnowledgeRetrieval = 'knowledge-retrieval',
    QuestionClassifier = 'question-classifier',
    IfElse = 'if-else',
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
