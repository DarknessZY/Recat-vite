import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import styles from '../index.module.scss'

const DraggablePractice = () => {
  /** 拖拽排序*/
  const [list] = useState([
    { label: '北京银行', id: 1 },
    { label: '武汉银行', id: 2 },
    { label: '上海银行', id: 3 }
  ])
  const [dragIndex, setDragIndex] = useState(0)
  const dragStart = (e: any, index: number) => {
    e.stopPropagation()
    setDragIndex(index)
    console.log('dragIndex', dragIndex)

    setTimeout(() => {
      e.target.classList.add('moveing')
    }, 0)
  }
  const dragEnter = (e: any, index: number) => {
    e.preventDefault()
    // 拖拽到原位置时不触发
    if (dragIndex !== index) {
      const source = list[dragIndex]
      list.splice(dragIndex, 1)
      list.splice(index, 0, source)
      console.log('list2', list)
      // 更新节点位置
      setDragIndex(index)
    }
  }
  const dragover = (event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move' // 设置dropEffect为'move'
  }
  const dragend = (event: any) => {
    event.target.classList.remove('moveing')
  }
  // 使用react-beautiful-dnd插件完成拖拽排序
  const [items, setItemItems] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' }
  ])
  const handleDragEnd = (result: {
    destination: { index: number }
    source: { index: number }
  }) => {
    if (!result.destination) {
      return
    }

    const reorderedItems = Array.from(items)
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1)
    reorderedItems.splice(result.destination.index, 0, reorderedItem)

    // 更新排序后的列表
    console.log('更新排序后的列表', reorderedItems)
    setItemItems(reorderedItems)
  }
  return (
    <>
      <div>拖拽排序小练习</div>
      {list.map((item: any, index: number) => {
        return (
          <div
            className={styles.draggableItem}
            key={item.id}
            draggable="true"
            onDragStart={(event) => dragStart(event, index)}
            onDragEnter={(event) => dragEnter(event, index)}
            onDragEnd={dragend}
            onDragOver={dragover}
          >
            {item.label}
          </div>
        )
      })}
      <div>使用react-beautiful-dnd插件完成拖拽排序</div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="items">
          {(provided: any) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: any) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default DraggablePractice
