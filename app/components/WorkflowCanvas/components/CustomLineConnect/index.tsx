import { memo } from 'react'
import type { ConnectionLineComponentProps } from '@xyflow/react'
import {
    Position,
    getBezierPath,
} from '@xyflow/react'

const CustomConnectionLine = ({ fromX, fromY, toX, toY }: ConnectionLineComponentProps) => {
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

    return (
        <g>
            <path
                fill="none"
                stroke='#4d53e8'
                strokeWidth={2}
                d={edgePath}
            />
            <rect
                x={toX}
                y={toY - 4}
                width={2}
                height={8}
                fill='#2970FF'
            />
        </g>
    )
}

export default memo(CustomConnectionLine)
