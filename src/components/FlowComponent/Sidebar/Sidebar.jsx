import React from 'react';
import style from './Sidebar.module.css'

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
            <div className={style.desc}>You can drag these nodes to the pane on the right.</div>
            <div className={[style.node, style.nodeInput].join(' ')} onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className={[style.node, style.nodeDefault].join(' ')} onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className={[style.node, style.nodeOutput].join(' ')} onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};

export default Sidebar