import {memo} from 'react'
import type {ConnectionLineComponentProps} from '@xyflow/react'
import {
    Position,
    getBezierPath,
    useConnection
} from '@xyflow/react'

const CustomConnectionLine = ({fromX, fromY, toX, toY}: ConnectionLineComponentProps) => {
    const [
        edgePath,
    ] = getBezierPath({
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: Position.Right,
        targetX: toX,
        targetY: toY,
        targetPosition: Position.Left,
        curvature: 0.16,
    })


    return (<g>
            <defs>
                <marker className="react-flow__arrowhead" id="arrowhead"
                        markerWidth="12.5" markerHeight="12.5" viewBox="-10 -10 20 20" markerUnits="strokeWidth"
                        orient="auto-start-reverse" refX="0" refY="0">
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style={{
                        stroke: ' rgb(77, 83, 232)',
                        fill: 'rgb(77, 83, 232)',
                        strokeWidth: 2
                    }}></polyline>
                </marker>
            </defs>

            <path
                fill="none"
                stroke='#4d53e8'
                strokeWidth={2}
                d={edgePath}
                markerEnd="url(#arrowhead)"
            />
        </g>

    )
}

export default memo(CustomConnectionLine)
