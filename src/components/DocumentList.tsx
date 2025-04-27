import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { DocumentItem, reorderDocuments } from "../features/documents/documentsSlice";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const DocumentList: React.FC = () => {
  const documents = useAppSelector((s) => s.documents.documents);
  const dispatch = useAppDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = documents.findIndex((d) => d.id === active.id);
    const newIndex = documents.findIndex((d) => d.id === over.id);
    dispatch(reorderDocuments(arrayMove(documents, oldIndex, newIndex)));
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={documents} strategy={verticalListSortingStrategy}>
        <ul>
          {documents.map((doc) => (
            <SortableItem key={doc.id} id={doc.id}>
              <li className="p-2 flex items-center gap-2 cursor-grab">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: doc.color }} />
                {doc.name}
              </li>
            </SortableItem>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default DocumentList;
