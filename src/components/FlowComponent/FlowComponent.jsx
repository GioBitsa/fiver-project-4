import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, ReactFlowProvider, Controls } from 'react-flow-renderer';
import Sidebar from './Sidebar/Sidebar';
import MainCardComponent from './MainCardComponent/MainCardComponent';
import style from './FlowComponent.module.css'
import ConnectionLine from './ConnectionLine/ConnectionLine';

const nodeTypes = { mainCardComponent: MainCardComponent };

const initialNodes = [
    {
        id: 'horizontal-1',
        sourcePosition: 'right',
        type: 'mainCardComponent',
        className: 'dark-node',
        data: {
            profileCard: true,
            title: "Grap Profiles",
            color: "#1890ff",
            content:
                [
                    {
                        title: "Account",
                        content: "Hanna Gourie"
                    },
                    {
                        title: "URL",
                        content: "lorem ipsum lorem ipsum lorem ipsum"
                    }
                ],
        },
        position: { x: -250, y: 0 },
    },
    {
        id: 'horizontal-2',
        sourcePosition: 'right',
        targetPosition: 'left',
        type: 'mainCardComponent',
        data: {
            profileCard: false,
            title: "Grap Profiles",
            color: "#309535",
            content: [
                {
                    title: "Account",
                    content: "Hanna Gourie"
                },
                {
                    title: "URL",
                    content: "lorem ipsum lorem ipsum lorem ipsum"
                },
                {
                    title: "Message",
                    content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                }
            ],
        },
        position: { x: 250, y: -250 },
    },
    {
        id: 'horizontal-3',
        type: 'mainCardComponent',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {
            profileCard: false,
            title: "Grap Profiles",
            color: "#9846e2",
            content: [
                {
                    title: "Account",
                    content: "Hanna Gourie"
                },
                {
                    title: "URL",
                    content: "lorem ipsum lorem ipsum lorem ipsum"
                },
                {
                    title: "Message",
                    content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                }
            ],
        },
        position: { x: 250, y: 250 },
    },
];

const initialEdges = [
    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'ConnectionLine',
        target: 'horizontal-2',
    },
    {
        id: 'horizontal-e1-3',
        source: 'horizontal-1',
        type: 'ConnectionLine',
        target: 'horizontal-3',
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const HorizontalFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type: 'mainCardComponent',
                sourcePosition: 'right',
                targetPosition: 'left',
                position,
                data: {
                    profileCard: false,
                    title: "Random Profile",
                    color: "#9846e2",
                    content: [
                        {
                            title: "Title 1",
                            content: "Content 1"
                        },
                        {
                            title: "Title 2",
                            content: "Content 2"
                        },
                        {
                            title: "Title 3",
                            content: "Content 3"
                        }
                    ],
                },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance, setNodes]
    );

    return (
        <div className={style.flow}>
            <ReactFlowProvider>
                <div className={style.reactFlowWrapper} ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        attributionPosition="bottom-left"

                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}

                        nodeTypes={nodeTypes}
                        connectionLineComponent={ConnectionLine}
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <Sidebar />
            </ReactFlowProvider >
        </div >
    );
};

export default HorizontalFlow;
